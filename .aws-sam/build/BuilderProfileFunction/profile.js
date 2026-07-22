'use strict';

const PROFILE_URL = 'https://api.builder.aws.com/ums/getProfileByAlias';

function response(statusCode, body) {
  return {statusCode, headers: {'content-type': 'application/json', 'access-control-allow-origin': process.env.ALLOWED_ORIGIN || '*'}, body: JSON.stringify(body)};
}

exports.handler = async function handler(event) {
  let body;
  try { body = JSON.parse(event.body || '{}'); }
  catch (_) { return response(400, {message: 'Request body must be valid JSON.'}); }

  const alias = typeof body.alias === 'string' ? body.alias.trim() : '';
  if (!alias || alias.length > 128 || !/^[A-Za-z0-9._-]+$/.test(alias)) return response(400, {message: 'A valid Builder alias is required.'});

  try {
    const upstream = await fetch(PROFILE_URL, {method: 'POST', headers: {'builder-session-token': process.env.BUILDER_SESSION_TOKEN || 'dummy', 'content-type': 'application/json'}, body: JSON.stringify({alias}), signal: AbortSignal.timeout(8000)});
    const text = await upstream.text();
    let payload;
    try { payload = text ? JSON.parse(text) : {}; } catch (_) { payload = {}; }
    if (!upstream.ok) {
      console.warn('Builder profile service returned', upstream.status);
      return response(upstream.status === 404 ? 404 : 502, {message: upstream.status === 404 ? 'Builder profile not found.' : 'Builder profile service is unavailable.'});
    }
    return response(200, payload);
  } catch (error) {
    console.error('Builder profile request failed', error && error.message);
    return response(502, {message: 'Builder profile service is unavailable.'});
  }
};

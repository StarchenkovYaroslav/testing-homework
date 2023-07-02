import express from 'express'

export function getBugId(req: express.Request) {
  return Number(req.query.bug_id) || Number(process.env.BUG_ID) || 0;
}

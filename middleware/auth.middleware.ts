import express, { Request, Response, Router } from 'express';

export async function ensureAuthenticated(req: Request, res: Response, next: any) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('/login');
    }
}



export function isAdmin(req, res, next) {
    try {
        const { username, password } = req.body;
        if (username == process.env.ADMIN && password == process.env.ADMIN_PASSWORD) {
            next();
            return;
        }

        res.redirect('/access_denied');

    } catch (err) {
        res.status(500).end('admin validation failed', err.message)
    }
}
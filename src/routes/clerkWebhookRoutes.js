"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clerkWebhook_controller_1 = require("../controllers/clerkWebhook.controller");
var clerkRouter = express_1.default.Router();
clerkRouter.post("/users", express_1.default.raw({ type: 'application/json' }), clerkWebhook_controller_1.ClerkWebhookController.UserCreateWebhook);
exports.default = clerkRouter;

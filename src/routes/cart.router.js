import express from "express";
import passport from "passport";
import {
  getCart,
  addProductToCart,
  createCart,
  purchaseCart,
  clearCart,
} from "../controllers/cart.controller.js";
import { authorizeRole, allowOnlyUsers } from "../middlewares/authorization.js";
import { validateCartItem } from "../middlewares/cartValidations.js";

const router = express.Router();

router.get(
  "/:cid",
  passport.authenticate("jwt", { session: false }),
  authorizeRole("user"),
  getCart
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  allowOnlyUsers,
  createCart
);

router.post(
  "/:cid/products",
  passport.authenticate("jwt", { session: false }),
  authorizeRole("user"),
  validateCartItem,
  addProductToCart
);

router.post(
  "/:cid/purchase",
  passport.authenticate("jwt", { session: false }),
  authorizeRole("user"),
  purchaseCart
);

router.delete(
  "/:cid",
  passport.authenticate("jwt", { session: false }),
  authorizeRole("user"),
  clearCart
);

export default router;

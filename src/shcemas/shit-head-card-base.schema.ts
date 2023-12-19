import mongoose from "mongoose";
import { CardColorEnum } from "../enums/card-color.enum";
import { CardTypeEnum } from "../enums/card-type.enum";
import { CardVisibilityTypeEnum } from "../enums/card-visibility-type.enum";

export const ShitHeadCardSchema = new mongoose.Schema({
  color: Object.values(CardColorEnum),
  type: Object.values(CardTypeEnum),
  visibility: Object.values(CardVisibilityTypeEnum)
});

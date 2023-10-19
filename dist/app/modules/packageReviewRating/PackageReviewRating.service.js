"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageReviewRatingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createPackageReviewRating = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.packageReviewAndRating.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.packageReviewAndRating.findMany({});
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.packageReviewAndRating.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updatePackageReviewRating = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.packageReviewAndRating.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deletePackageReviewRating = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.packageReviewAndRating.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.PackageReviewRatingService = {
    createPackageReviewRating,
    getAllFromDb,
    getById,
    updatePackageReviewRating,
    deletePackageReviewRating,
};

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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const sendResetMail_1 = require("./sendResetMail");
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.create({
        data,
    });
    const { email, role, id, password } = result;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ email, role, id }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ email, password, id }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logIn = (LoginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = LoginData;
    const isUserExist = yield prisma_1.default.customer.findFirst({
        where: {
            email,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'user not found');
    }
    const { role, id } = isUserExist;
    const isUserExistWithPassword = yield prisma_1.default.customer.findFirst({
        where: {
            email,
            password,
        },
    });
    if (!isUserExistWithPassword) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'password not matched');
    }
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ email, role, id }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ email, password, id }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const changePassword = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = payload;
    const isUserExist = yield prisma_1.default.customer.findUnique({
        where: {
            id: user === null || user === void 0 ? void 0 : user.id,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    // // checking old password
    if (isUserExist.password !== oldPassword) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Old Password is incorrect');
    }
    const result = yield prisma_1.default.customer.update({
        where: {
            id: user === null || user === void 0 ? void 0 : user.id,
        },
        data: {
            password: newPassword,
        },
    });
    return result;
});
const forgotPass = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield prisma_1.default.customer.findFirst({
        where: {
            email: payload.email,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User does not exist!');
    }
    const passResetToken = yield jwtHelpers_1.jwtHelpers.createResetToken({ id: isUserExist.id, role: isUserExist.role }, config_1.default.jwt.secret, '50m');
    const resetLink = config_1.default.resetlink + `token=${passResetToken}`;
    yield (0, sendResetMail_1.sendEmail)(isUserExist.email, `
      <div>
        <p>Hi, ${isUserExist.firstName} ${isUserExist.lastName}</p>
        <p>Your password reset link: <a href=${resetLink}>Click Here</a></p>
        <p>Thank you</p>
      </div>
  `);
    return {
        message: 'Check your email!',
    };
});
const resetPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { newPassword } = payload;
    const user = yield prisma_1.default.customer.findUnique({
        where: {
            id: payload === null || payload === void 0 ? void 0 : payload.id,
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User not found!');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const isVarified = await jwtHelpers.verifyToken(
    //   token,
    //   config.jwt.secret as string,
    // );
    // const password = await bcrypt.hash(newPassword, Number(config.bycrypt_salt_rounds));
    const result = yield prisma_1.default.customer.update({
        where: {
            id: user === null || user === void 0 ? void 0 : user.id,
        },
        data: {
            password: newPassword,
        },
    });
    return result;
});
exports.AuthService = {
    signUp,
    logIn,
    changePassword,
    forgotPass,
    resetPassword,
};

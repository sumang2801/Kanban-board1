(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@nhost+hasura-auth-js@2.12.0/node_modules/@nhost/hasura-auth-js/dist/index.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AuthClient": ()=>Ee,
    "AuthClientSSR": ()=>yr,
    "AuthCookieClient": ()=>qe,
    "CodifiedError": ()=>b,
    "EMAIL_NEEDS_VERIFICATION": ()=>ve,
    "HasuraAuthClient": ()=>Rr,
    "INITIAL_MACHINE_CONTEXT": ()=>$,
    "INVALID_EMAIL_ERROR": ()=>R,
    "INVALID_MFA_CODE_ERROR": ()=>ye,
    "INVALID_MFA_TICKET_ERROR": ()=>Ie,
    "INVALID_MFA_TYPE_ERROR": ()=>ke,
    "INVALID_PASSWORD_ERROR": ()=>Y,
    "INVALID_PHONE_NUMBER_ERROR": ()=>Z,
    "INVALID_REFRESH_TOKEN": ()=>Pe,
    "INVALID_SIGN_IN_METHOD": ()=>Oe,
    "MIN_PASSWORD_LENGTH": ()=>we,
    "NETWORK_ERROR_CODE": ()=>ie,
    "NHOST_JWT_EXPIRES_AT_KEY": ()=>O,
    "NHOST_REFRESH_TOKEN_ID_KEY": ()=>U,
    "NHOST_REFRESH_TOKEN_KEY": ()=>x,
    "NO_MFA_TICKET_ERROR": ()=>Se,
    "NO_REFRESH_TOKEN": ()=>Ae,
    "OTHER_ERROR_CODE": ()=>oe,
    "REFRESH_TOKEN_MAX_ATTEMPTS": ()=>X,
    "STATE_ERROR_CODE": ()=>D,
    "TOKEN_REFRESHER_RUNNING_ERROR": ()=>Re,
    "TOKEN_REFRESH_MARGIN_SECONDS": ()=>Q,
    "USER_ALREADY_SIGNED_IN": ()=>k,
    "USER_NOT_ANONYMOUS": ()=>wr,
    "USER_UNAUTHENTICATED": ()=>_e,
    "VALIDATION_ERROR_CODE": ()=>v,
    "activateMfaPromise": ()=>Sr,
    "addSecurityKeyPromise": ()=>ze,
    "changeEmailPromise": ()=>Qe,
    "changePasswordPromise": ()=>Xe,
    "createAuthMachine": ()=>He,
    "createChangeEmailMachine": ()=>Ye,
    "createChangePasswordMachine": ()=>je,
    "createEnableMfaMachine": ()=>kr,
    "createResetPasswordMachine": ()=>Fe,
    "createSendVerificationEmailMachine": ()=>Be,
    "disableMfaPromise": ()=>Ar,
    "elevateEmailSecurityKeyPromise": ()=>sr,
    "encodeQueryParameters": ()=>F,
    "generateQrCodePromise": ()=>Ir,
    "getAuthenticationResult": ()=>A,
    "getFetch": ()=>$e,
    "getParameterByName": ()=>K,
    "getSession": ()=>M,
    "isBrowser": ()=>L,
    "isValidEmail": ()=>_,
    "isValidPassword": ()=>B,
    "isValidPhoneNumber": ()=>ee,
    "isValidTicket": ()=>We,
    "linkIdTokenPromise": ()=>fr,
    "localStorageGetter": ()=>Le,
    "localStorageSetter": ()=>Ge,
    "postFetch": ()=>I,
    "removeParameterFromWindow": ()=>J,
    "resetPasswordPromise": ()=>Ze,
    "rewriteRedirectTo": ()=>S,
    "sendVerificationEmailPromise": ()=>Je,
    "signInAnonymousPromise": ()=>er,
    "signInEmailOTPPromise": ()=>ur,
    "signInEmailPasswordPromise": ()=>rr,
    "signInEmailPasswordlessPromise": ()=>re,
    "signInEmailSecurityKeyPromise": ()=>nr,
    "signInIdTokenPromise": ()=>dr,
    "signInMfaTotpPromise": ()=>tr,
    "signInPATPromise": ()=>ir,
    "signInSecurityKeyPromise": ()=>hr,
    "signInSmsPasswordlessOtpPromise": ()=>or,
    "signInSmsPasswordlessPromise": ()=>se,
    "signOutPromise": ()=>ar,
    "signUpEmailPasswordPromise": ()=>te,
    "signUpEmailSecurityKeyPromise": ()=>cr,
    "verifyEmailOTPPromise": ()=>lr
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jwt-decode@4.0.0/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/Machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/interpreter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fetch$2d$ponyfill$40$7$2e$1$2e$0$2f$node_modules$2f$fetch$2d$ponyfill$2f$build$2f$fetch$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fetch-ponyfill@7.1.0/node_modules/fetch-ponyfill/build/fetch-browser.js [app-client] (ecmascript)");
;
;
;
;
const x = "nhostRefreshToken", U = "nhostRefreshTokenId", O = "nhostRefreshTokenExpiresAt", we = 3, Q = 60, X = 5, ie = 0, oe = 1, v = 10, D = 20;
class b extends Error {
    constructor(e){
        super(e.message), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), e instanceof Error ? (this.name = e.name, this.error = {
            error: e.name,
            status: oe,
            message: e.message
        }) : (this.name = e.error, this.error = e);
    }
}
const R = {
    status: v,
    error: "invalid-email",
    message: "Email is incorrectly formatted"
}, ke = {
    status: v,
    error: "invalid-mfa-type",
    message: "MFA type is invalid"
}, ye = {
    status: v,
    error: "invalid-mfa-code",
    message: "MFA code is invalid"
}, Y = {
    status: v,
    error: "invalid-password",
    message: "Password is incorrectly formatted"
}, Z = {
    status: v,
    error: "invalid-phone-number",
    message: "Phone number is incorrectly formatted"
}, Ie = {
    status: v,
    error: "invalid-mfa-ticket",
    message: "MFA ticket is invalid"
}, Se = {
    status: v,
    error: "no-mfa-ticket",
    message: "No MFA ticket has been provided"
}, Ae = {
    status: v,
    error: "no-refresh-token",
    message: "No refresh token has been provided"
}, Re = {
    status: D,
    error: "refresher-already-running",
    message: "The token refresher is already running. You must wait until is has finished before submitting a new token."
}, k = {
    status: D,
    error: "already-signed-in",
    message: "User is already signed in"
}, _e = {
    status: D,
    error: "unauthenticated-user",
    message: "User is not authenticated"
}, wr = {
    status: D,
    error: "user-not-anonymous",
    message: "User is not anonymous"
}, ve = {
    status: D,
    error: "unverified-user",
    message: "Email needs verification"
}, Pe = {
    status: v,
    error: "invalid-refresh-token",
    message: "Invalid or expired refresh token"
}, Oe = {
    status: oe,
    error: "invalid-sign-in-method",
    message: "Invalid sign-in method"
}, $ = {
    user: null,
    mfa: null,
    accessToken: {
        value: null,
        expiresAt: null,
        expiresInSeconds: 15
    },
    refreshTimer: {
        startedAt: null,
        attempts: 0,
        lastAttempt: null
    },
    refreshToken: {
        value: null
    },
    importTokenAttempts: 0,
    errors: {}
};
function be(s) {
    return new TextEncoder().encode(s);
}
function P(s) {
    const e = new Uint8Array(s);
    let r = "";
    for (const t of e)r += String.fromCharCode(t);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function q(s) {
    const e = s.replace(/-/g, "+").replace(/_/g, "/"), r = (4 - e.length % 4) % 4, n = e.padEnd(e.length + r, "="), t = atob(n), i = new ArrayBuffer(t.length), u = new Uint8Array(i);
    for(let f = 0; f < t.length; f++)u[f] = t.charCodeAt(f);
    return i;
}
function ae() {
    return (window == null ? void 0 : window.PublicKeyCredential) !== void 0 && typeof window.PublicKeyCredential == "function";
}
function ce(s) {
    const { id: e } = s;
    return {
        ...s,
        id: q(e),
        transports: s.transports
    };
}
function ue(s) {
    return s === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s);
}
class p extends Error {
    constructor({ message: e, code: r, cause: n, name: t }){
        super(e, {
            cause: n
        }), this.name = t != null ? t : n.name, this.code = r;
    }
}
function Ne(param) {
    let { error: s, options: e } = param;
    var n, t;
    const { publicKey: r } = e;
    if (!r) throw Error("options was missing required publicKey property");
    if (s.name === "AbortError") {
        if (e.signal instanceof AbortSignal) return new p({
            message: "Registration ceremony was sent an abort signal",
            code: "ERROR_CEREMONY_ABORTED",
            cause: s
        });
    } else if (s.name === "ConstraintError") {
        if (((n = r.authenticatorSelection) == null ? void 0 : n.requireResidentKey) === !0) return new p({
            message: "Discoverable credentials were required but no available authenticator supported it",
            code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
            cause: s
        });
        if (((t = r.authenticatorSelection) == null ? void 0 : t.userVerification) === "required") return new p({
            message: "User verification was required but no available authenticator supported it",
            code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
            cause: s
        });
    } else {
        if (s.name === "InvalidStateError") return new p({
            message: "The authenticator was previously registered",
            code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
            cause: s
        });
        if (s.name === "NotAllowedError") return new p({
            message: s.message,
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: s
        });
        if (s.name === "NotSupportedError") return r.pubKeyCredParams.filter((u)=>u.type === "public-key").length === 0 ? new p({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: s
        }) : new p({
            message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: s
        });
        if (s.name === "SecurityError") {
            const i = window.location.hostname;
            if (ue(i)) {
                if (r.rp.id !== i) return new p({
                    message: 'The RP ID "'.concat(r.rp.id, '" is invalid for this domain'),
                    code: "ERROR_INVALID_RP_ID",
                    cause: s
                });
            } else return new p({
                message: "".concat(window.location.hostname, " is an invalid domain"),
                code: "ERROR_INVALID_DOMAIN",
                cause: s
            });
        } else if (s.name === "TypeError") {
            if (r.user.id.byteLength < 1 || r.user.id.byteLength > 64) return new p({
                message: "User ID was not between 1 and 64 characters",
                code: "ERROR_INVALID_USER_ID_LENGTH",
                cause: s
            });
        } else if (s.name === "UnknownError") return new p({
            message: "The authenticator was unable to process the specified options, or could not create a new credential",
            code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
            cause: s
        });
    }
    return s;
}
class xe {
    createNewAbortSignal() {
        if (this.controller) {
            const r = new Error("Cancelling existing WebAuthn API call for new one");
            r.name = "AbortError", this.controller.abort(r);
        }
        const e = new AbortController();
        return this.controller = e, e.signal;
    }
    cancelCeremony() {
        if (this.controller) {
            const e = new Error("Manually cancelling existing WebAuthn API call");
            e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
        }
    }
}
const le = new xe(), Ce = [
    "cross-platform",
    "platform"
];
function de(s) {
    if (s && !(Ce.indexOf(s) < 0)) return s;
}
async function fe(s) {
    var a;
    if (!ae()) throw new Error("WebAuthn is not supported in this browser");
    const r = {
        publicKey: {
            ...s,
            challenge: q(s.challenge),
            user: {
                ...s.user,
                id: be(s.user.id)
            },
            excludeCredentials: (a = s.excludeCredentials) == null ? void 0 : a.map(ce)
        }
    };
    r.signal = le.createNewAbortSignal();
    let n;
    try {
        n = await navigator.credentials.create(r);
    } catch (o) {
        throw Ne({
            error: o,
            options: r
        });
    }
    if (!n) throw new Error("Registration was not completed");
    const { id: t, rawId: i, response: u, type: f } = n;
    let d;
    typeof u.getTransports == "function" && (d = u.getTransports());
    let h;
    if (typeof u.getPublicKeyAlgorithm == "function") try {
        h = u.getPublicKeyAlgorithm();
    } catch (o) {
        W("getPublicKeyAlgorithm()", o);
    }
    let E;
    if (typeof u.getPublicKey == "function") try {
        const o = u.getPublicKey();
        o !== null && (E = P(o));
    } catch (o) {
        W("getPublicKey()", o);
    }
    let T;
    if (typeof u.getAuthenticatorData == "function") try {
        T = P(u.getAuthenticatorData());
    } catch (o) {
        W("getAuthenticatorData()", o);
    }
    return {
        id: t,
        rawId: P(i),
        response: {
            attestationObject: P(u.attestationObject),
            clientDataJSON: P(u.clientDataJSON),
            transports: d,
            publicKeyAlgorithm: h,
            publicKey: E,
            authenticatorData: T
        },
        type: f,
        clientExtensionResults: n.getClientExtensionResults(),
        authenticatorAttachment: de(n.authenticatorAttachment)
    };
}
function W(s, e) {
    console.warn("The browser extension that intercepted this WebAuthn API call incorrectly implemented ".concat(s, ". You should report this error to them.\n"), e);
}
function De(s) {
    return new TextDecoder("utf-8").decode(s);
}
function Ue() {
    const s = window.PublicKeyCredential;
    return s.isConditionalMediationAvailable === void 0 ? new Promise((e)=>e(!1)) : s.isConditionalMediationAvailable();
}
function Me(param) {
    let { error: s, options: e } = param;
    const { publicKey: r } = e;
    if (!r) throw Error("options was missing required publicKey property");
    if (s.name === "AbortError") {
        if (e.signal instanceof AbortSignal) return new p({
            message: "Authentication ceremony was sent an abort signal",
            code: "ERROR_CEREMONY_ABORTED",
            cause: s
        });
    } else {
        if (s.name === "NotAllowedError") return new p({
            message: s.message,
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: s
        });
        if (s.name === "SecurityError") {
            const n = window.location.hostname;
            if (ue(n)) {
                if (r.rpId !== n) return new p({
                    message: 'The RP ID "'.concat(r.rpId, '" is invalid for this domain'),
                    code: "ERROR_INVALID_RP_ID",
                    cause: s
                });
            } else return new p({
                message: "".concat(window.location.hostname, " is an invalid domain"),
                code: "ERROR_INVALID_DOMAIN",
                cause: s
            });
        } else if (s.name === "UnknownError") return new p({
            message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
            code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
            cause: s
        });
    }
    return s;
}
async function j(s) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    var T, a;
    if (!ae()) throw new Error("WebAuthn is not supported in this browser");
    let r;
    ((T = s.allowCredentials) == null ? void 0 : T.length) !== 0 && (r = (a = s.allowCredentials) == null ? void 0 : a.map(ce));
    const n = {
        ...s,
        challenge: q(s.challenge),
        allowCredentials: r
    }, t = {};
    if (e) {
        if (!await Ue()) throw Error("Browser does not support WebAuthn autofill");
        if (document.querySelectorAll("input[autocomplete$='webauthn']").length < 1) throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');
        t.mediation = "conditional", n.allowCredentials = [];
    }
    t.publicKey = n, t.signal = le.createNewAbortSignal();
    let i;
    try {
        i = await navigator.credentials.get(t);
    } catch (o) {
        throw Me({
            error: o,
            options: t
        });
    }
    if (!i) throw new Error("Authentication was not completed");
    const { id: u, rawId: f, response: d, type: h } = i;
    let E;
    return d.userHandle && (E = De(d.userHandle)), {
        id: u,
        rawId: P(f),
        response: {
            authenticatorData: P(d.authenticatorData),
            clientDataJSON: P(d.clientDataJSON),
            signature: P(d.signature),
            userHandle: E
        },
        type: h,
        clientExtensionResults: i.getClientExtensionResults(),
        authenticatorAttachment: de(i.authenticatorAttachment)
    };
}
const G = typeof window != "undefined", V = /* @__PURE__ */ new Map(), Ke = (s)=>{
    var e;
    return G && typeof localStorage != "undefined" ? localStorage.getItem(s) : (e = V.get(s)) != null ? e : null;
}, Ve = (s, e)=>{
    G && typeof localStorage != "undefined" ? e ? localStorage.setItem(s, e) : localStorage.removeItem(s) : e ? V.set(s, e) : V.has(s) && V.delete(s);
}, Le = (s, e)=>{
    if (s === "localStorage" || s === "web") return Ke;
    if (s === "cookie") return (r)=>{
        var n;
        return G && (n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(r)) != null ? n : null;
    };
    if (!e) throw Error("clientStorageType is set to '".concat(s, "' but no clientStorage has been given"));
    if (s === "react-native") return (r)=>{
        var n;
        return (n = e.getItem) == null ? void 0 : n.call(e, r);
    };
    if (s === "capacitor") return (r)=>{
        var n;
        return (n = e.get) == null ? void 0 : n.call(e, {
            key: r
        });
    };
    if (s === "expo-secure-storage") return (r)=>{
        var n;
        return (n = e.getItemAsync) == null ? void 0 : n.call(e, r);
    };
    if (s === "custom") {
        if (e.getItem && e.removeItem) return e.getItem;
        if (e.getItemAsync) return e.getItemAsync;
        throw Error('clientStorageType is set to \'custom\' but clientStorage is missing either "getItem" and "removeItem" properties or "getItemAsync" property');
    }
    throw Error("Unknown storage type: ".concat(s));
}, Ge = (s, e)=>{
    if (s === "localStorage" || s === "web") return Ve;
    if (s === "cookie") return (r, n)=>{
        G && (n ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set(r, n, {
            expires: 30,
            sameSite: "lax",
            httpOnly: !1
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove(r));
    };
    if (!e) throw Error("clientStorageType is set to '".concat(s, "' but no clienStorage has been given"));
    if (s === "react-native") return (r, n)=>{
        var t, i;
        return n ? (t = e.setItem) == null ? void 0 : t.call(e, r, n) : (i = e.removeItem) == null ? void 0 : i.call(e, r);
    };
    if (s === "capacitor") return (r, n)=>{
        var t, i;
        return n ? (t = e.set) == null ? void 0 : t.call(e, {
            key: r,
            value: n
        }) : (i = e.remove) == null ? void 0 : i.call(e, {
            key: r
        });
    };
    if (s === "expo-secure-storage") return async (r, n)=>{
        var t, i;
        return n ? (t = e.setItemAsync) == null ? void 0 : t.call(e, r, n) : (i = e.deleteItemAsync) == null ? void 0 : i.call(e, r);
    };
    if (s === "custom") {
        if (!e.removeItem) throw Error("clientStorageType is set to 'custom' but clientStorage is missing a removeItem property");
        if (e.setItem) return (r, n)=>{
            var t, i;
            return n ? (t = e.setItem) == null ? void 0 : t.call(e, r, n) : (i = e.removeItem) == null ? void 0 : i.call(e, r);
        };
        if (e.setItemAsync) return async (r, n)=>{
            var t, i;
            return n ? (t = e.setItemAsync) == null ? void 0 : t.call(e, r, n) : (i = e.removeItem) == null ? void 0 : i.call(e, r);
        };
        throw Error("clientStorageType is set to 'custom' but clientStorage is missing setItem or setItemAsync property");
    }
    throw Error("Unknown storage type: ".concat(s));
}, M = (s)=>!s || !s.accessToken.value || !s.accessToken.expiresAt || !s.user ? null : {
        accessToken: s.accessToken.value,
        accessTokenExpiresIn: (s.accessToken.expiresAt.getTime() - Date.now()) / 1e3,
        refreshToken: s.refreshToken.value,
        user: s.user
    }, A = (param)=>{
    let { accessToken: s, refreshToken: e, isError: r, user: n, error: t } = param;
    return r ? {
        session: null,
        error: t
    } : n && s ? {
        // TODO either return the refresh token or remove it from the session type
        session: {
            accessToken: s,
            accessTokenExpiresIn: 0,
            refreshToken: e,
            user: n
        },
        error: null
    } : {
        session: null,
        error: null
    };
}, L = ()=>typeof window != "undefined" && typeof window.location != "undefined";
let he = globalThis.fetch;
typeof EdgeRuntime != "string" && (he = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fetch$2d$ponyfill$40$7$2e$1$2e$0$2f$node_modules$2f$fetch$2d$ponyfill$2f$build$2f$fetch$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().fetch);
const me = async function(s, e) {
    let { token: r, body: n, extraHeaders: t } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = {
        "Content-Type": "application/json",
        Accept: "*/*"
    };
    r && (i.Authorization = "Bearer ".concat(r));
    const u = {
        ...i,
        ...t
    }, f = {
        method: e,
        headers: u
    };
    n && (f.body = JSON.stringify(n));
    try {
        const d = await he(s, f);
        if (!d.ok) {
            const h = await d.json();
            return Promise.reject({
                error: h
            });
        }
        try {
            return {
                data: await d.json(),
                error: null
            };
        } catch (e) {
            return console.warn("Unexpected response: can't parse the response of the server at ".concat(s)), {
                data: "OK",
                error: null
            };
        }
    } catch (e) {
        const h = {
            message: "Network Error",
            status: ie,
            error: "network"
        };
        return Promise.reject({
            error: h
        });
    }
}, I = async (s, e, r, n)=>me(s, "POST", {
        token: r,
        body: e,
        extraHeaders: n
    }), $e = (s, e)=>me(s, "GET", {
        token: e
    }), F = (s, e)=>{
    const r = e && Object.entries(e).map((param)=>{
        let [n, t] = param;
        const i = Array.isArray(t) ? t.join(",") : typeof t == "object" ? JSON.stringify(t) : t;
        return "".concat(n, "=").concat(encodeURIComponent(i));
    }).join("&");
    return r ? "".concat(s, "?").concat(r) : s;
}, S = (s, e)=>{
    if (!(e != null && e.redirectTo)) return e;
    const { redirectTo: r, ...n } = e;
    if (!s) return r.startsWith("/") ? n : e;
    const t = new URL(s), i = Object.fromEntries(new URLSearchParams(t.search)), u = new URL(r.startsWith("/") ? t.origin + r : r), f = new URLSearchParams(u.search);
    let d = Object.fromEntries(f);
    r.startsWith("/") && (d = {
        ...i,
        ...d
    });
    let h = t.pathname;
    return u.pathname.length > 1 && (h += u.pathname.slice(1)), {
        ...n,
        redirectTo: F(u.origin + h, d)
    };
};
function K(s, e) {
    var t;
    if (!e) {
        if (typeof window == "undefined") return;
        e = ((t = window.location) == null ? void 0 : t.href) || "";
    }
    s = s.replace(/[\[\]]/g, "\\$&");
    const r = new RegExp("[?&#]" + s + "(=([^&#]*)|&|#|$)"), n = r.exec(e);
    return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null;
}
function J(s) {
    var r;
    if (typeof window == "undefined") return;
    const e = window == null ? void 0 : window.location;
    if (e && e) {
        const n = new URLSearchParams(e.search), t = new URLSearchParams((r = e.hash) == null ? void 0 : r.slice(1));
        n.delete(s), t.delete(s);
        let i = window.location.pathname;
        Array.from(n).length && (i += "?".concat(n.toString())), Array.from(t).length && (i += "#".concat(t.toString())), window.history.pushState({}, "", i);
    }
}
const _ = (s)=>!!s && typeof s == "string" && !!String(s).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), B = (s)=>!!s && typeof s == "string" && s.length >= we, ee = (s)=>!!s && typeof s == "string", We = (s)=>s && typeof s == "string" && s.match(/^mfaTotp:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i), He = (param)=>{
    let { backendUrl: s, clientUrl: e, broadcastKey: r, clientStorageType: n = "web", clientStorage: t, refreshIntervalTime: i, autoRefreshToken: u = !0, autoSignIn: f = !0 } = param;
    const d = Le(n, t), h = Ge(n, t), E = async (a, o, c, l)=>(await I("".concat(s).concat(a), o, c, l)).data;
    let T = null;
    if (typeof window != "undefined" && r) try {
        T = new BroadcastChannel(r);
    } catch (e) {}
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMachine"])({
        schema: {
            context: {},
            events: {},
            services: {}
        },
        tsTypes: {},
        context: $,
        predictableActionArguments: !0,
        id: "nhost",
        type: "parallel",
        states: {
            authentication: {
                initial: "starting",
                on: {
                    SESSION_UPDATE: [
                        {
                            cond: "hasSession",
                            actions: [
                                "saveSession",
                                "resetTimer",
                                "reportTokenChanged"
                            ],
                            target: ".signedIn"
                        }
                    ]
                },
                states: {
                    starting: {
                        tags: [
                            "loading"
                        ],
                        always: {
                            cond: "isSignedIn",
                            target: "signedIn"
                        },
                        invoke: {
                            id: "importRefreshToken",
                            src: "importRefreshToken",
                            onDone: [
                                {
                                    cond: "hasSession",
                                    actions: [
                                        "saveSession",
                                        "reportTokenChanged"
                                    ],
                                    target: "signedIn"
                                },
                                {
                                    target: "signedOut"
                                }
                            ],
                            onError: [
                                {
                                    cond: "shouldRetryImportToken",
                                    actions: "incrementTokenImportAttempts",
                                    target: "retryTokenImport"
                                },
                                {
                                    actions: [
                                        "saveAuthenticationError"
                                    ],
                                    target: "signedOut"
                                }
                            ]
                        }
                    },
                    retryTokenImport: {
                        tags: [
                            "loading"
                        ],
                        after: {
                            RETRY_IMPORT_TOKEN_DELAY: "starting"
                        }
                    },
                    signedOut: {
                        initial: "noErrors",
                        entry: "reportSignedOut",
                        states: {
                            noErrors: {},
                            success: {},
                            needsSmsOtp: {},
                            needsMfa: {},
                            failed: {},
                            signingOut: {
                                entry: [
                                    "clearContextExceptTokens"
                                ],
                                exit: [
                                    "destroyAccessToken",
                                    "destroyRefreshToken",
                                    "reportTokenChanged"
                                ],
                                invoke: {
                                    src: "signout",
                                    id: "signingOut",
                                    onDone: {
                                        target: "success"
                                    },
                                    onError: {
                                        target: "failed",
                                        actions: [
                                            "saveAuthenticationError"
                                        ]
                                    }
                                }
                            }
                        },
                        on: {
                            SIGNIN_PASSWORD: "authenticating.password",
                            SIGNIN_ANONYMOUS: "authenticating.anonymous",
                            SIGNIN_SECURITY_KEY_EMAIL: "authenticating.securityKeyEmail",
                            SIGNIN_SECURITY_KEY: "authenticating.securityKey",
                            SIGNIN_MFA_TOTP: "authenticating.mfa.totp",
                            SIGNIN_PAT: "authenticating.pat",
                            SIGNIN_ID_TOKEN: "authenticating.idToken"
                        }
                    },
                    authenticating: {
                        entry: "resetErrors",
                        states: {
                            password: {
                                invoke: {
                                    src: "signInPassword",
                                    id: "authenticateUserWithPassword",
                                    onDone: [
                                        {
                                            cond: "hasMfaTicket",
                                            actions: [
                                                "saveMfaTicket"
                                            ],
                                            target: "#nhost.authentication.signedOut.needsMfa"
                                        },
                                        {
                                            actions: [
                                                "saveSession",
                                                "reportTokenChanged"
                                            ],
                                            target: "#nhost.authentication.signedIn"
                                        }
                                    ],
                                    onError: [
                                        {
                                            cond: "unverified",
                                            target: [
                                                "#nhost.authentication.signedOut",
                                                "#nhost.registration.incomplete.needsEmailVerification"
                                            ]
                                        },
                                        {
                                            actions: "saveAuthenticationError",
                                            target: "#nhost.authentication.signedOut.failed"
                                        }
                                    ]
                                }
                            },
                            pat: {
                                invoke: {
                                    src: "signInPAT",
                                    id: "authenticateWithPAT",
                                    onDone: {
                                        actions: [
                                            "savePATSession",
                                            "reportTokenChanged"
                                        ],
                                        target: "#nhost.authentication.signedIn"
                                    },
                                    onError: {
                                        actions: "saveAuthenticationError",
                                        target: "#nhost.authentication.signedOut.failed"
                                    }
                                }
                            },
                            idToken: {
                                invoke: {
                                    src: "signInIdToken",
                                    id: "authenticateWithIdToken",
                                    onDone: {
                                        actions: [
                                            "saveSession",
                                            "reportTokenChanged"
                                        ],
                                        target: "#nhost.authentication.signedIn"
                                    },
                                    onError: {
                                        actions: "saveAuthenticationError",
                                        target: "#nhost.authentication.signedOut.failed"
                                    }
                                }
                            },
                            anonymous: {
                                invoke: {
                                    src: "signInAnonymous",
                                    id: "authenticateAnonymously",
                                    onDone: {
                                        actions: [
                                            "saveSession",
                                            "reportTokenChanged"
                                        ],
                                        target: "#nhost.authentication.signedIn"
                                    },
                                    onError: {
                                        actions: "saveAuthenticationError",
                                        target: "#nhost.authentication.signedOut.failed"
                                    }
                                }
                            },
                            mfa: {
                                states: {
                                    totp: {
                                        invoke: {
                                            src: "signInMfaTotp",
                                            id: "signInMfaTotp",
                                            onDone: {
                                                actions: [
                                                    "saveSession",
                                                    "reportTokenChanged"
                                                ],
                                                target: "#nhost.authentication.signedIn"
                                            },
                                            onError: {
                                                actions: [
                                                    "saveAuthenticationError"
                                                ],
                                                target: "#nhost.authentication.signedOut.failed"
                                            }
                                        }
                                    }
                                }
                            },
                            securityKeyEmail: {
                                invoke: {
                                    src: "signInSecurityKeyEmail",
                                    id: "authenticateUserWithSecurityKey",
                                    onDone: {
                                        actions: [
                                            "saveSession",
                                            "reportTokenChanged"
                                        ],
                                        target: "#nhost.authentication.signedIn"
                                    },
                                    onError: [
                                        {
                                            cond: "unverified",
                                            target: [
                                                "#nhost.authentication.signedOut",
                                                "#nhost.registration.incomplete.needsEmailVerification"
                                            ]
                                        },
                                        {
                                            actions: "saveAuthenticationError",
                                            target: "#nhost.authentication.signedOut.failed"
                                        }
                                    ]
                                }
                            },
                            securityKey: {
                                invoke: {
                                    src: "signInSecurityKey",
                                    id: "authenticateUserWithSecurityKey",
                                    onDone: {
                                        actions: [
                                            "saveSession",
                                            "reportTokenChanged"
                                        ],
                                        target: "#nhost.authentication.signedIn"
                                    },
                                    onError: [
                                        {
                                            cond: "unverified",
                                            target: [
                                                "#nhost.authentication.signedOut",
                                                "#nhost.registration.incomplete.needsEmailVerification"
                                            ]
                                        },
                                        {
                                            actions: "saveAuthenticationError",
                                            target: "#nhost.authentication.signedOut.failed"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    signedIn: {
                        type: "parallel",
                        entry: [
                            "reportSignedIn",
                            "cleanUrl",
                            "broadcastToken",
                            "resetErrors"
                        ],
                        on: {
                            SIGNOUT: "signedOut.signingOut"
                        },
                        states: {
                            refreshTimer: {
                                id: "timer",
                                initial: "idle",
                                states: {
                                    disabled: {
                                        type: "final"
                                    },
                                    stopped: {
                                        always: {
                                            cond: "noToken",
                                            target: "idle"
                                        }
                                    },
                                    idle: {
                                        always: [
                                            {
                                                cond: "isAutoRefreshDisabled",
                                                target: "disabled"
                                            },
                                            {
                                                cond: "isRefreshTokenPAT",
                                                target: "disabled"
                                            },
                                            {
                                                cond: "hasRefreshToken",
                                                target: "running"
                                            }
                                        ]
                                    },
                                    running: {
                                        initial: "pending",
                                        entry: "resetTimer",
                                        states: {
                                            pending: {
                                                after: {
                                                    1e3: {
                                                        internal: !1,
                                                        target: "pending"
                                                    }
                                                },
                                                always: {
                                                    cond: "refreshTimerShouldRefresh",
                                                    target: "refreshing"
                                                }
                                            },
                                            refreshing: {
                                                invoke: {
                                                    src: "refreshToken",
                                                    id: "refreshToken",
                                                    onDone: {
                                                        actions: [
                                                            "saveSession",
                                                            "resetTimer",
                                                            "reportTokenChanged",
                                                            "broadcastToken"
                                                        ],
                                                        target: "pending"
                                                    },
                                                    onError: [
                                                        {
                                                            cond: "isUnauthorizedError",
                                                            target: "#nhost.authentication.signedOut"
                                                        },
                                                        {
                                                            actions: "saveRefreshAttempt",
                                                            target: "pending"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            token: {
                initial: "idle",
                states: {
                    idle: {
                        on: {
                            TRY_TOKEN: "running"
                        },
                        initial: "noErrors",
                        states: {
                            noErrors: {},
                            error: {}
                        }
                    },
                    running: {
                        invoke: {
                            src: "refreshToken",
                            id: "authenticateWithToken",
                            onDone: {
                                actions: [
                                    "saveSession",
                                    "reportTokenChanged",
                                    "broadcastToken"
                                ],
                                target: [
                                    "#nhost.authentication.signedIn",
                                    "idle.noErrors"
                                ]
                            },
                            onError: [
                                {
                                    cond: "isSignedIn",
                                    target: "idle.error"
                                },
                                {
                                    actions: "saveAuthenticationError",
                                    target: [
                                        "#nhost.authentication.signedOut.failed",
                                        "idle.error"
                                    ]
                                }
                            ]
                        }
                    }
                }
            },
            registration: {
                initial: "incomplete",
                on: {
                    SIGNED_IN: [
                        {
                            cond: "isAnonymous",
                            target: ".incomplete"
                        },
                        ".complete"
                    ]
                },
                states: {
                    incomplete: {
                        on: {
                            SIGNUP_EMAIL_PASSWORD: "emailPassword",
                            SIGNUP_SECURITY_KEY: "securityKey",
                            PASSWORDLESS_EMAIL: "passwordlessEmail",
                            PASSWORDLESS_SMS: "passwordlessSms",
                            PASSWORDLESS_SMS_OTP: "passwordlessSmsOtp",
                            SIGNIN_EMAIL_OTP: "signInEmailOTP",
                            VERIFY_EMAIL_OTP: "verifyEmailOTP"
                        },
                        initial: "noErrors",
                        states: {
                            noErrors: {},
                            needsEmailVerification: {},
                            needsOtp: {},
                            failed: {}
                        }
                    },
                    emailPassword: {
                        entry: [
                            "resetErrors"
                        ],
                        invoke: {
                            src: "signUpEmailPassword",
                            id: "signUpEmailPassword",
                            onDone: [
                                {
                                    cond: "hasSession",
                                    actions: [
                                        "saveSession",
                                        "reportTokenChanged"
                                    ],
                                    target: "#nhost.authentication.signedIn"
                                },
                                {
                                    actions: "clearContext",
                                    target: [
                                        "#nhost.authentication.signedOut",
                                        "incomplete.needsEmailVerification"
                                    ]
                                }
                            ],
                            onError: [
                                {
                                    cond: "unverified",
                                    target: "incomplete.needsEmailVerification"
                                },
                                {
                                    actions: "saveRegistrationError",
                                    target: "incomplete.failed"
                                }
                            ]
                        }
                    },
                    securityKey: {
                        entry: [
                            "resetErrors"
                        ],
                        invoke: {
                            src: "signUpSecurityKey",
                            id: "signUpSecurityKey",
                            onDone: [
                                {
                                    cond: "hasSession",
                                    actions: [
                                        "saveSession",
                                        "reportTokenChanged"
                                    ],
                                    target: "#nhost.authentication.signedIn"
                                },
                                {
                                    actions: "clearContext",
                                    target: [
                                        "#nhost.authentication.signedOut",
                                        "incomplete.needsEmailVerification"
                                    ]
                                }
                            ],
                            onError: [
                                {
                                    cond: "unverified",
                                    target: "incomplete.needsEmailVerification"
                                },
                                {
                                    actions: "saveRegistrationError",
                                    target: "incomplete.failed"
                                }
                            ]
                        }
                    },
                    passwordlessEmail: {
                        entry: [
                            "resetErrors"
                        ],
                        invoke: {
                            src: "passwordlessEmail",
                            id: "passwordlessEmail",
                            onDone: {
                                actions: "clearContext",
                                target: [
                                    "#nhost.authentication.signedOut",
                                    "incomplete.needsEmailVerification"
                                ]
                            },
                            onError: {
                                actions: "saveRegistrationError",
                                target: "incomplete.failed"
                            }
                        }
                    },
                    passwordlessSms: {
                        entry: [
                            "resetErrors"
                        ],
                        invoke: {
                            src: "passwordlessSms",
                            id: "passwordlessSms",
                            onDone: {
                                actions: "clearContext",
                                target: [
                                    "#nhost.authentication.signedOut",
                                    "incomplete.needsOtp"
                                ]
                            },
                            onError: {
                                actions: "saveRegistrationError",
                                target: "incomplete.failed"
                            }
                        }
                    },
                    passwordlessSmsOtp: {
                        entry: [
                            "resetErrors"
                        ],
                        invoke: {
                            src: "passwordlessSmsOtp",
                            id: "passwordlessSmsOtp",
                            onDone: {
                                actions: [
                                    "saveSession",
                                    "reportTokenChanged"
                                ],
                                target: "#nhost.authentication.signedIn"
                            },
                            onError: {
                                actions: "saveRegistrationError",
                                target: "incomplete.failed"
                            }
                        }
                    },
                    signInEmailOTP: {
                        entry: [
                            "resetErrors"
                        ],
                        invoke: {
                            src: "signInEmailOTP",
                            id: "signInEmailOTP",
                            onDone: {
                                actions: "clearContext",
                                target: [
                                    "#nhost.authentication.signedOut",
                                    "incomplete.needsOtp"
                                ]
                            },
                            onError: {
                                actions: "saveRegistrationError",
                                target: "incomplete.failed"
                            }
                        }
                    },
                    verifyEmailOTP: {
                        entry: [
                            "resetErrors"
                        ],
                        invoke: {
                            src: "verifyEmailOTP",
                            id: "verifyEmailOTP",
                            onDone: {
                                actions: [
                                    "saveSession",
                                    "reportTokenChanged"
                                ],
                                target: "#nhost.authentication.signedIn"
                            },
                            onError: {
                                actions: "saveRegistrationError",
                                target: "incomplete.failed"
                            }
                        }
                    },
                    complete: {
                        on: {
                            SIGNED_OUT: "incomplete"
                        }
                    }
                }
            }
        }
    }, {
        actions: {
            reportSignedIn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("SIGNED_IN"),
            reportSignedOut: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("SIGNED_OUT"),
            reportTokenChanged: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("TOKEN_CHANGED"),
            incrementTokenImportAttempts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                importTokenAttempts: (param)=>{
                    let { importTokenAttempts: a } = param;
                    return a + 1;
                }
            }),
            clearContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])(()=>(h(O, null), h(x, null), h(U, null), {
                    ...$
                })),
            clearContextExceptTokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])((param)=>{
                let { accessToken: a, refreshToken: o } = param;
                return {
                    ...$,
                    accessToken: a,
                    refreshToken: o
                };
            }),
            // * Save session in the context, and persist the refresh token and the jwt expiration outside of the machine
            saveSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                user: (a, param)=>{
                    let { data: o } = param;
                    var c;
                    return ((c = o == null ? void 0 : o.session) == null ? void 0 : c.user) || null;
                },
                accessToken: (a, param)=>{
                    let { data: o } = param;
                    if (o.session) {
                        const { accessTokenExpiresIn: c, accessToken: l } = o.session, m = new Date(Date.now() + c * 1e3);
                        return h(O, m.toISOString()), {
                            value: l,
                            expiresAt: m,
                            expiresInSeconds: c
                        };
                    }
                    return h(O, null), {
                        value: null,
                        expiresAt: null,
                        expiresInSeconds: null
                    };
                },
                refreshToken: (a, param)=>{
                    let { data: o } = param;
                    var m, y;
                    const c = ((m = o.session) == null ? void 0 : m.refreshToken) || null, l = ((y = o.session) == null ? void 0 : y.refreshTokenId) || null;
                    return c && h(x, c), l && h(U, l), {
                        value: c
                    };
                }
            }),
            savePATSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                user: (a, param)=>{
                    let { data: o } = param;
                    var c;
                    return ((c = o == null ? void 0 : o.session) == null ? void 0 : c.user) || null;
                },
                accessToken: (a, param)=>{
                    let { data: o } = param;
                    if (o.session) {
                        const { accessTokenExpiresIn: c, accessToken: l } = o.session, m = new Date(Date.now() + c * 1e3);
                        return h(O, m.toISOString()), {
                            value: l,
                            expiresAt: m,
                            expiresInSeconds: c
                        };
                    }
                    return h(O, null), {
                        value: null,
                        expiresAt: null,
                        expiresInSeconds: null
                    };
                },
                refreshToken: (a, param)=>{
                    let { data: o } = param;
                    var m, y;
                    const c = ((m = o.session) == null ? void 0 : m.refreshToken) || null, l = ((y = o.session) == null ? void 0 : y.refreshTokenId) || null;
                    return c && h(x, c), l && h(U, l), {
                        value: c,
                        isPAT: !0
                    };
                }
            }),
            saveMfaTicket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                mfa: (a, o)=>{
                    var c;
                    return (c = o.data) == null ? void 0 : c.mfa;
                }
            }),
            resetTimer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                refreshTimer: (a)=>({
                        startedAt: /* @__PURE__ */ new Date(),
                        attempts: 0,
                        lastAttempt: null
                    })
            }),
            saveRefreshAttempt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                refreshTimer: (a, o)=>({
                        startedAt: a.refreshTimer.startedAt,
                        attempts: a.refreshTimer.attempts + 1,
                        lastAttempt: /* @__PURE__ */ new Date()
                    })
            }),
            // * Authentication errors
            saveAuthenticationError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
                errors: (param, param1)=>{
                    let { errors: a } = param, { data: { error: o } } = param1;
                    return {
                        ...a,
                        authentication: o
                    };
                }
            }),
            resetErrors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                errors: (a)=>({}),
                importTokenAttempts: (a)=>0
            }),
            saveRegistrationError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
                errors: (param, param1)=>{
                    let { errors: a } = param, { data: { error: o } } = param1;
                    return {
                        ...a,
                        registration: o
                    };
                }
            }),
            destroyRefreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                refreshToken: (a)=>(h(x, null), h(U, null), {
                        value: null
                    })
            }),
            destroyAccessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                accessToken: (a)=>(h(O, null), {
                        value: null,
                        expiresAt: null,
                        expiresInSeconds: null
                    })
            }),
            // * Clean the browser url when `autoSignIn` is activated
            cleanUrl: ()=>{
                f && K("refreshToken") && (J("refreshToken"), J("type"));
            },
            // * Broadcast the session to other tabs when `autoSignIn` is activated
            broadcastToken: (a)=>{
                if (f && r && T) try {
                    T.postMessage({
                        type: "broadcast_session",
                        payload: {
                            token: a.refreshToken.value,
                            accessToken: a.accessToken.value,
                            user: a.user,
                            expiresAt: a.accessToken.expiresAt ? a.accessToken.expiresAt.toISOString() : null,
                            expiresInSeconds: a.accessToken.expiresInSeconds
                        }
                    });
                } catch (e) {}
            }
        },
        guards: {
            isAnonymous: (a, o)=>{
                var c;
                return !!((c = a.user) != null && c.isAnonymous);
            },
            isSignedIn: (a)=>!!a.user && !!a.accessToken.value,
            noToken: (a)=>!a.refreshToken.value,
            isRefreshTokenPAT: (a)=>{
                var o;
                return !!((o = a.refreshToken) != null && o.isPAT);
            },
            hasRefreshToken: (a)=>!!a.refreshToken.value,
            isAutoRefreshDisabled: ()=>!u,
            refreshTimerShouldRefresh: (a)=>{
                const { expiresAt: o } = a.accessToken;
                if (!o) return !1;
                if (a.refreshTimer.lastAttempt) return a.refreshTimer.attempts > X ? !1 : Date.now() - a.refreshTimer.lastAttempt.getTime() > Math.pow(2, a.refreshTimer.attempts - 1) * 5e3;
                if (o.getTime() < Date.now() || i && Date.now() - a.refreshTimer.startedAt.getTime() > i * 1e3) return !0;
                if (!a.accessToken.expiresInSeconds) return !1;
                const l = o.getTime() - Date.now();
                return l <= Q * 1e3 / 2 || l <= Q * 1e3 && Math.random() < 0.1;
            },
            // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
            /** Should retry to import the token on network error or any internal server error.
         * Don't retry more than REFRESH_TOKEN_MAX_ATTEMPTS times.
         */ shouldRetryImportToken: (a, o)=>a.importTokenAttempts < X && (o.data.error.status === ie || o.data.error.status >= 500),
            // * Authentication errors
            // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
            unverified: (a, param)=>{
                let { data: { error: o } } = param;
                return o.status === 401 && // * legacy: don't use the message contents to determine if the email is unverified, but the error type (error.error)
                (o.message === "Email is not verified" || o.error === "unverified-user");
            },
            // * Event guards
            hasSession: (a, o)=>{
                var c;
                return !!((c = o.data) != null && c.session);
            },
            hasMfaTicket: (a, o)=>{
                var c;
                return !!((c = o.data) != null && c.mfa);
            },
            isUnauthorizedError: (a, param)=>{
                let { data: { error: o } } = param;
                return o.status === 401;
            }
        },
        services: {
            signInPassword: (a, param)=>{
                let { email: o, password: c } = param;
                return _(o) ? B(c) ? E("/signin/email-password", {
                    email: o,
                    password: c
                }) : Promise.reject({
                    error: Y
                }) : Promise.reject({
                    error: R
                });
            },
            signInPAT: (a, param)=>{
                let { pat: o } = param;
                return E("/signin/pat", {
                    personalAccessToken: o
                });
            },
            signInIdToken: (a, param)=>{
                let { provider: o, idToken: c, nonce: l } = param;
                return E("/signin/idtoken", {
                    provider: o,
                    idToken: c,
                    ...l && {
                        nonce: l
                    }
                });
            },
            passwordlessSms: (a, param)=>{
                let { phoneNumber: o, options: c } = param;
                var l;
                return ee(o) ? (l = a.user) != null && l.isAnonymous ? (console.warn("Deanonymisation from a phone number is not yet implemented in hasura-auth"), E("/user/deanonymize", {
                    signInMethod: "passwordless",
                    connection: "sms",
                    phoneNumber: o,
                    options: S(e, c)
                }, a.accessToken.value)) : E("/signin/passwordless/sms", {
                    phoneNumber: o,
                    options: S(e, c)
                }) : Promise.reject({
                    error: Z
                });
            },
            passwordlessSmsOtp: (a, param)=>{
                let { phoneNumber: o, otp: c } = param;
                return ee(o) ? E("/signin/passwordless/sms/otp", {
                    phoneNumber: o,
                    otp: c
                }) : Promise.reject({
                    error: Z
                });
            },
            signInEmailOTP: (a, param)=>{
                let { email: o, options: c } = param;
                return _(o) ? E("/signin/otp/email", {
                    email: o,
                    options: S(e, c)
                }) : Promise.reject({
                    error: R
                });
            },
            verifyEmailOTP: (a, param)=>{
                let { email: o, otp: c } = param;
                return _(o) ? E("/signin/otp/email/verify", {
                    email: o,
                    otp: c
                }) : Promise.reject({
                    error: R
                });
            },
            passwordlessEmail: (a, param)=>{
                let { email: o, options: c } = param;
                var l;
                return _(o) ? (l = a.user) != null && l.isAnonymous ? E("/user/deanonymize", {
                    signInMethod: "passwordless",
                    connection: "email",
                    email: o,
                    options: S(e, c)
                }, a.accessToken.value) : E("/signin/passwordless/email", {
                    email: o,
                    options: S(e, c)
                }) : Promise.reject({
                    error: R
                });
            },
            signInAnonymous: (a)=>E("/signin/anonymous"),
            signInMfaTotp: (a, o)=>{
                var l;
                const c = o.ticket || ((l = a.mfa) == null ? void 0 : l.ticket);
                return c ? We(c) ? E("/signin/mfa/totp", {
                    ticket: c,
                    otp: o.otp
                }) : Promise.reject({
                    error: Ie
                }) : Promise.reject({
                    error: Se
                });
            },
            signInSecurityKeyEmail: async (a, param)=>{
                let { email: o } = param;
                if (!_(o)) throw new b(R);
                const c = await E("/signin/webauthn", {
                    email: o
                });
                let l;
                try {
                    l = await j(c);
                } catch (m) {
                    throw new b(m);
                }
                return E("/signin/webauthn/verify", {
                    email: o,
                    credential: l
                });
            },
            refreshToken: async (a, o)=>{
                const c = o.type === "TRY_TOKEN" ? o.token : a.refreshToken.value;
                return {
                    session: await E("/token", {
                        refreshToken: c
                    }),
                    error: null
                };
            },
            signInSecurityKey: async ()=>{
                try {
                    const a = await E("/signin/webauthn", {});
                    let o;
                    try {
                        o = await j(a);
                    } catch (c) {
                        throw new b(c);
                    }
                    return E("/signin/webauthn/verify", {
                        credential: o
                    });
                } catch (a) {
                    throw new b(a);
                }
            },
            signout: async (a, o)=>{
                const c = await E("/signout", {
                    refreshToken: a.refreshToken.value,
                    all: !!o.all
                }, o.all ? a.accessToken.value : void 0);
                if (r && T) try {
                    T.postMessage({
                        type: "signout"
                    });
                } catch (e) {}
                return c;
            },
            signUpEmailPassword: async (a, param)=>{
                let { email: o, password: c, options: l, requestOptions: m } = param;
                var y;
                return _(o) ? B(c) ? (y = a.user) != null && y.isAnonymous ? E("/user/deanonymize", {
                    signInMethod: "email-password",
                    email: o,
                    password: c,
                    options: S(e, l)
                }, a.accessToken.value, m == null ? void 0 : m.headers) : E("/signup/email-password", {
                    email: o,
                    password: c,
                    options: S(e, l)
                }, null, m == null ? void 0 : m.headers) : Promise.reject({
                    error: Y
                }) : Promise.reject({
                    error: R
                });
            },
            signUpSecurityKey: async (a, param)=>{
                let { email: o, options: c, requestOptions: l } = param;
                if (!_(o)) return Promise.reject({
                    error: R
                });
                const m = c == null ? void 0 : c.nickname;
                m && delete c.nickname;
                const y = await E("/signup/webauthn", {
                    email: o,
                    options: c
                }, null, l == null ? void 0 : l.headers);
                let z;
                try {
                    z = await fe(y);
                } catch (ge) {
                    throw new b(ge);
                }
                return E("/signup/webauthn/verify", {
                    credential: z,
                    options: {
                        redirectTo: c == null ? void 0 : c.redirectTo,
                        nickname: m,
                        displayName: c == null ? void 0 : c.displayName,
                        ...(c == null ? void 0 : c.metadata) && {
                            metadata: c == null ? void 0 : c.metadata
                        }
                    }
                });
            },
            importRefreshToken: async (a)=>{
                if (a.user && a.refreshToken.value && a.accessToken.value && a.accessToken.expiresAt) return {
                    session: {
                        accessToken: a.accessToken.value,
                        accessTokenExpiresIn: a.accessToken.expiresAt.getTime() - Date.now(),
                        refreshToken: a.refreshToken.value,
                        user: a.user
                    },
                    error: null
                };
                let o = null;
                if (f) {
                    const l = K("refreshToken") || null;
                    if (l) try {
                        return {
                            session: await E("/token", {
                                refreshToken: l
                            }),
                            error: null
                        };
                    } catch (m) {
                        o = m.error;
                    }
                    else {
                        const m = K("error"), y = K("errorDescription");
                        if (m && y !== "social user already exists") return Promise.reject({
                            session: null,
                            error: {
                                status: v,
                                error: m,
                                message: y || m
                            }
                        });
                    }
                }
                const c = await d(x);
                if (c) try {
                    return {
                        session: await E("/token", {
                            refreshToken: c
                        }),
                        error: null
                    };
                } catch (l) {
                    o = l.error;
                }
                return o ? Promise.reject({
                    error: o,
                    session: null
                }) : {
                    error: null,
                    session: null
                };
            }
        },
        delays: {
            RETRY_IMPORT_TOKEN_DELAY: (param)=>{
                let { importTokenAttempts: a } = param;
                return Math.pow(2, a - 1) * 5e3;
            }
        }
    });
}, Ye = (param)=>{
    let { backendUrl: s, clientUrl: e, interpreter: r } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMachine"])({
        schema: {
            context: {},
            events: {},
            services: {}
        },
        tsTypes: {},
        predictableActionArguments: !0,
        id: "changeEmail",
        initial: "idle",
        context: {
            error: null
        },
        states: {
            idle: {
                on: {
                    REQUEST: [
                        {
                            cond: "invalidEmail",
                            actions: "saveInvalidEmailError",
                            target: ".error"
                        },
                        {
                            target: "requesting"
                        }
                    ]
                },
                initial: "initial",
                states: {
                    initial: {},
                    success: {},
                    error: {}
                }
            },
            requesting: {
                invoke: {
                    src: "requestChange",
                    id: "requestChange",
                    onDone: {
                        target: "idle.success",
                        actions: "reportSuccess"
                    },
                    onError: {
                        actions: [
                            "saveRequestError",
                            "reportError"
                        ],
                        target: "idle.error"
                    }
                }
            }
        }
    }, {
        actions: {
            saveInvalidEmailError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                error: (n)=>R
            }),
            saveRequestError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
                error: (n, param)=>{
                    let { data: { error: t } } = param;
                    return t;
                }
            }),
            reportError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])((n)=>({
                    type: "ERROR",
                    error: n.error
                })),
            // TODO change email in the main machine (context.user.email)
            reportSuccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("SUCCESS")
        },
        guards: {
            invalidEmail: (n, param)=>{
                let { email: t } = param;
                return !_(t);
            }
        },
        services: {
            requestChange: async (n, param)=>{
                let { email: t, options: i } = param;
                return (await I("".concat(s, "/user/email/change"), {
                    newEmail: t,
                    options: S(e, i)
                }, r == null ? void 0 : r.getSnapshot().context.accessToken.value)).data;
            }
        }
    });
}, je = (param)=>{
    let { backendUrl: s, interpreter: e } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMachine"])({
        schema: {
            context: {},
            events: {},
            services: {}
        },
        tsTypes: {},
        predictableActionArguments: !0,
        id: "changePassword",
        initial: "idle",
        context: {
            error: null
        },
        states: {
            idle: {
                on: {
                    REQUEST: [
                        {
                            cond: "invalidPassword",
                            actions: "saveInvalidPasswordError",
                            target: ".error"
                        },
                        {
                            target: "requesting"
                        }
                    ]
                },
                initial: "initial",
                states: {
                    initial: {},
                    success: {},
                    error: {}
                }
            },
            requesting: {
                invoke: {
                    src: "requestChange",
                    id: "requestChange",
                    onDone: {
                        target: "idle.success",
                        actions: "reportSuccess"
                    },
                    onError: {
                        actions: [
                            "saveRequestError",
                            "reportError"
                        ],
                        target: "idle.error"
                    }
                }
            }
        }
    }, {
        actions: {
            saveInvalidPasswordError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                error: (r)=>Y
            }),
            saveRequestError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
                error: (r, param)=>{
                    let { data: { error: n } } = param;
                    return n;
                }
            }),
            reportError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])((r)=>({
                    type: "ERROR",
                    error: r.error
                })),
            reportSuccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("SUCCESS")
        },
        guards: {
            invalidPassword: (r, param)=>{
                let { password: n } = param;
                return !B(n);
            }
        },
        services: {
            requestChange: (r, param)=>{
                let { password: n, ticket: t } = param;
                return I("".concat(s, "/user/password"), {
                    newPassword: n,
                    ticket: t
                }, e == null ? void 0 : e.getSnapshot().context.accessToken.value);
            }
        }
    });
}, kr = (param)=>{
    let { backendUrl: s, interpreter: e } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMachine"])({
        schema: {
            context: {},
            events: {}
        },
        tsTypes: {},
        predictableActionArguments: !0,
        id: "enableMfa",
        initial: "idle",
        context: {
            error: null,
            imageUrl: null,
            secret: null
        },
        states: {
            idle: {
                initial: "initial",
                on: {
                    GENERATE: "generating",
                    DISABLE: "disabling"
                },
                states: {
                    initial: {},
                    error: {},
                    disabled: {}
                }
            },
            generating: {
                invoke: {
                    src: "generate",
                    id: "generate",
                    onDone: {
                        target: "generated",
                        actions: [
                            "reportGeneratedSuccess",
                            "saveGeneration"
                        ]
                    },
                    onError: {
                        actions: [
                            "saveError",
                            "reportGeneratedError"
                        ],
                        target: "idle.error"
                    }
                }
            },
            generated: {
                initial: "idle",
                states: {
                    idle: {
                        initial: "idle",
                        on: {
                            ACTIVATE: [
                                {
                                    cond: "invalidMfaType",
                                    actions: "saveInvalidMfaTypeError",
                                    target: ".error"
                                },
                                {
                                    cond: "invalidMfaCode",
                                    actions: "saveInvalidMfaCodeError",
                                    target: ".error"
                                },
                                {
                                    target: "activating"
                                }
                            ],
                            DISABLE: "#enableMfa.disabling"
                        },
                        states: {
                            idle: {},
                            error: {}
                        }
                    },
                    activating: {
                        invoke: {
                            src: "activate",
                            id: "activate",
                            onDone: {
                                target: "activated",
                                actions: "reportSuccess"
                            },
                            onError: {
                                actions: [
                                    "saveError",
                                    "reportError"
                                ],
                                target: "idle.error"
                            }
                        }
                    },
                    activated: {
                        type: "final"
                    }
                }
            },
            disabling: {
                invoke: {
                    src: "disable",
                    id: "disable",
                    onDone: {
                        target: "idle.disabled",
                        actions: "reportSuccess"
                    },
                    onError: {
                        actions: [
                            "saveError",
                            "reportError"
                        ],
                        target: "idle.error"
                    }
                }
            }
        }
    }, {
        actions: {
            saveInvalidMfaTypeError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                error: (r)=>ke
            }),
            saveInvalidMfaCodeError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                error: (r)=>ye
            }),
            saveError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                error: (r, param)=>{
                    let { data: { error: n } } = param;
                    return n;
                }
            }),
            saveGeneration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                imageUrl: (r, param)=>{
                    let { data: { imageUrl: n } } = param;
                    return n;
                },
                secret: (r, param)=>{
                    let { data: { totpSecret: n } } = param;
                    return n;
                }
            }),
            reportError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])((r, n)=>({
                    type: "ERROR",
                    error: r.error
                })),
            reportSuccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("SUCCESS"),
            reportGeneratedSuccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("GENERATED"),
            reportGeneratedError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])((r)=>({
                    type: "GENERATED_ERROR",
                    error: r.error
                }))
        },
        guards: {
            invalidMfaCode: (r, param)=>{
                let { code: n } = param;
                return !n;
            },
            invalidMfaType: (r, param)=>{
                let { activeMfaType: n } = param;
                return !n || n !== "totp";
            }
        },
        services: {
            generate: async (r)=>{
                const { data: n } = await $e("".concat(s, "/mfa/totp/generate"), e == null ? void 0 : e.getSnapshot().context.accessToken.value);
                return n;
            },
            activate: (r, param)=>{
                let { code: n, activeMfaType: t } = param;
                return I("".concat(s, "/user/mfa"), {
                    code: n,
                    activeMfaType: t
                }, e == null ? void 0 : e.getSnapshot().context.accessToken.value);
            },
            disable: (r, param)=>{
                let { code: n } = param;
                return I("".concat(s, "/user/mfa"), {
                    code: n,
                    activeMfaType: ""
                }, e == null ? void 0 : e.getSnapshot().context.accessToken.value);
            }
        }
    });
}, Fe = (param)=>{
    let { backendUrl: s, clientUrl: e } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMachine"])({
        schema: {
            context: {},
            events: {},
            services: {}
        },
        tsTypes: {},
        predictableActionArguments: !0,
        id: "changePassword",
        initial: "idle",
        context: {
            error: null
        },
        states: {
            idle: {
                on: {
                    REQUEST: [
                        {
                            cond: "invalidEmail",
                            actions: "saveInvalidEmailError",
                            target: ".error"
                        },
                        {
                            target: "requesting"
                        }
                    ]
                },
                initial: "initial",
                states: {
                    initial: {},
                    success: {},
                    error: {}
                }
            },
            requesting: {
                invoke: {
                    src: "requestChange",
                    id: "requestChange",
                    onDone: {
                        target: "idle.success",
                        actions: "reportSuccess"
                    },
                    onError: {
                        actions: [
                            "saveRequestError",
                            "reportError"
                        ],
                        target: "idle.error"
                    }
                }
            }
        }
    }, {
        actions: {
            saveInvalidEmailError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                error: (r)=>R
            }),
            saveRequestError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
                error: (r, param)=>{
                    let { data: { error: n } } = param;
                    return n;
                }
            }),
            reportError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])((r)=>({
                    type: "ERROR",
                    error: r.error
                })),
            reportSuccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("SUCCESS")
        },
        guards: {
            invalidEmail: (r, param)=>{
                let { email: n } = param;
                return !_(n);
            }
        },
        services: {
            requestChange: (r, param)=>{
                let { email: n, options: t } = param;
                return I("".concat(s, "/user/password/reset"), {
                    email: n,
                    options: S(e, t)
                });
            }
        }
    });
}, Be = (param)=>{
    let { backendUrl: s, clientUrl: e } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMachine"])({
        schema: {
            context: {},
            events: {},
            services: {}
        },
        tsTypes: {},
        predictableActionArguments: !0,
        id: "sendVerificationEmail",
        initial: "idle",
        context: {
            error: null
        },
        states: {
            idle: {
                on: {
                    REQUEST: [
                        {
                            cond: "invalidEmail",
                            actions: "saveInvalidEmailError",
                            target: ".error"
                        },
                        {
                            target: "requesting"
                        }
                    ]
                },
                initial: "initial",
                states: {
                    initial: {},
                    success: {},
                    error: {}
                }
            },
            requesting: {
                invoke: {
                    src: "request",
                    id: "request",
                    onDone: {
                        target: "idle.success",
                        actions: "reportSuccess"
                    },
                    onError: {
                        actions: [
                            "saveRequestError",
                            "reportError"
                        ],
                        target: "idle.error"
                    }
                }
            }
        }
    }, {
        actions: {
            saveInvalidEmailError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                error: (r)=>R
            }),
            saveRequestError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                // * Untyped action payload. See https://github.com/statelyai/xstate/issues/3037
                error: (r, param)=>{
                    let { data: { error: n } } = param;
                    return n;
                }
            }),
            reportError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])((r)=>({
                    type: "ERROR",
                    error: r.error
                })),
            reportSuccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["send"])("SUCCESS")
        },
        guards: {
            invalidEmail: (r, param)=>{
                let { email: n } = param;
                return !_(n);
            }
        },
        services: {
            request: async (r, param)=>{
                let { email: n, options: t } = param;
                return (await I("".concat(s, "/user/email/send-verification-email"), {
                    email: n,
                    options: S(e, t)
                })).data;
            }
        }
    });
};
class Ee {
    start() {
        let { devTools: e = !1, initialSession: r, interpreter: n } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var u, f;
        const t = {
            ...this.machine.context,
            accessToken: {
                ...this.machine.context.accessToken
            },
            refreshToken: {
                ...this.machine.context.refreshToken
            }
        };
        r && (t.user = r.user, t.refreshToken.value = (u = r.refreshToken) != null ? u : null, t.accessToken.value = (f = r.accessToken) != null ? f : null, t.accessToken.expiresAt = new Date(Date.now() + r.accessTokenExpiresIn * 1e3));
        const i = this.machine.withContext(t);
        this._interpreter || (this._interpreter = n || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpret"])(i, {
            devTools: e
        })), (!this._started || typeof window == "undefined") && (this._interpreter.initialized && (this._interpreter.stop(), this._subscriptions.forEach((d)=>d())), this._interpreter.start(i.initialState), this._subscriptionsQueue.forEach((d)=>d(this))), this._started = !0;
    }
    get machine() {
        return this._machine;
    }
    get interpreter() {
        return this._interpreter;
    }
    get started() {
        return this._started;
    }
    subscribe(e) {
        if (this.started) {
            const r = e(this);
            return this._subscriptions.add(r), r;
        } else return this._subscriptionsQueue.add(e), ()=>{
            console.log("onTokenChanged was added before the interpreter started. Cannot unsubscribe listener.");
        };
    }
    constructor({ clientStorageType: e = "web", autoSignIn: r = !0, autoRefreshToken: n = !0, start: t = !0, backendUrl: i, clientUrl: u, broadcastKey: f, devTools: d, ...h }){
        var E;
        if (this._started = !1, this._subscriptionsQueue = /* @__PURE__ */ new Set(), this._subscriptions = /* @__PURE__ */ new Set(), this.backendUrl = i, this.clientUrl = u, this._machine = He({
            ...h,
            backendUrl: i,
            clientUrl: u,
            broadcastKey: f,
            clientStorageType: e,
            autoSignIn: r,
            autoRefreshToken: n
        }), t && this.start({
            devTools: d
        }), typeof window != "undefined" && f) try {
            this._channel = new BroadcastChannel(f), r && ((E = this._channel) == null || E.addEventListener("message", (T)=>{
                var c;
                const { type: a, payload: o } = T.data;
                if (a === "broadcast_session") {
                    const l = (c = this.interpreter) == null ? void 0 : c.getSnapshot().context, m = l == null ? void 0 : l.refreshToken.value;
                    this.interpreter && o.token && o.token !== m && this.interpreter.send("SESSION_UPDATE", {
                        data: {
                            session: {
                                user: o.user,
                                accessToken: o.accessToken,
                                refreshToken: o.token,
                                accessTokenExpiresIn: o.expiresInSeconds
                            }
                        }
                    });
                }
            })), this._channel.addEventListener("message", (T)=>{
                const { type: a } = T.data;
                a === "signout" && this.interpreter && this.interpreter.send("SIGNOUT");
            });
        } catch (e) {}
    }
}
class qe extends Ee {
    constructor({ ...e }){
        super({
            ...e,
            autoSignIn: L() && e.autoSignIn,
            autoRefreshToken: L() && e.autoRefreshToken,
            clientStorageType: "cookie"
        });
    }
}
const yr = qe, ze = async (param, r)=>{
    let { backendUrl: s, interpreter: e } = param;
    try {
        const { data: n } = await I("".concat(s, "/user/webauthn/add"), {}, e == null ? void 0 : e.getSnapshot().context.accessToken.value);
        let t;
        try {
            t = await fe(n);
        } catch (u) {
            throw new b(u);
        }
        const { data: i } = await I("".concat(s, "/user/webauthn/verify"), {
            credential: t,
            nickname: r
        }, e == null ? void 0 : e.getSnapshot().context.accessToken.value);
        return {
            key: i,
            isError: !1,
            error: null,
            isSuccess: !0
        };
    } catch (n) {
        const { error: t } = n;
        return {
            isError: !0,
            error: t,
            isSuccess: !1
        };
    }
}, Qe = async (s, e, r)=>new Promise((n)=>{
        s.send("REQUEST", {
            email: e,
            options: r
        }), s.onTransition((t)=>{
            t.matches({
                idle: "error"
            }) ? n({
                error: t.context.error,
                isError: !0,
                needsEmailVerification: !1
            }) : t.matches({
                idle: "success"
            }) && n({
                error: null,
                isError: !1,
                needsEmailVerification: !0
            });
        });
    }), Xe = async (s, e, r)=>new Promise((n)=>{
        s.send("REQUEST", {
            password: e,
            ticket: r
        }), s.onTransition((t)=>{
            t.matches({
                idle: "error"
            }) ? n({
                error: t.context.error,
                isError: !0,
                isSuccess: !1
            }) : t.matches({
                idle: "success"
            }) && n({
                error: null,
                isError: !1,
                isSuccess: !0
            });
        });
    }), Ir = (s)=>new Promise((e)=>{
        s.send("GENERATE"), s.onTransition((r)=>{
            r.matches("generated") ? e({
                error: null,
                isError: !1,
                isGenerated: !0,
                qrCodeDataUrl: r.context.imageUrl || "",
                totpSecret: r.context.secret
            }) : r.matches({
                idle: "error"
            }) && e({
                error: r.context.error || null,
                isError: !0,
                isGenerated: !1,
                qrCodeDataUrl: "",
                totpSecret: r.context.secret
            });
        });
    }), Sr = (s, e)=>new Promise((r)=>{
        s.send("ACTIVATE", {
            activeMfaType: "totp",
            code: e
        }), s.onTransition((n)=>{
            n.matches({
                generated: "activated"
            }) ? r({
                error: null,
                isActivated: !0,
                isError: !1
            }) : n.matches({
                generated: {
                    idle: "error"
                }
            }) && r({
                error: n.context.error,
                isActivated: !1,
                isError: !0
            });
        });
    }), Ar = (s, e)=>new Promise((r)=>{
        s.send("DISABLE", {
            code: e
        }), s.onTransition((n)=>{
            n.matches({
                idle: "disabled"
            }) ? r({
                error: null,
                isDisabled: !0,
                isError: !1
            }) : n.matches({
                idle: "error"
            }) && r({
                error: n.context.error,
                isDisabled: !1,
                isError: !0
            });
        });
    }), Ze = async (s, e, r)=>new Promise((n)=>{
        s.send("REQUEST", {
            email: e,
            options: r
        }), s.onTransition((t)=>{
            t.matches({
                idle: "error"
            }) ? n({
                error: t.context.error,
                isError: !0,
                isSent: !1
            }) : t.matches({
                idle: "success"
            }) && n({
                error: null,
                isError: !1,
                isSent: !0
            });
        });
    }), Je = (s, e, r)=>new Promise((n)=>{
        s.send("REQUEST", {
            email: e,
            options: r
        }), s.onTransition((t)=>{
            t.matches({
                idle: "error"
            }) ? n({
                error: t.context.error,
                isError: !0,
                isSent: !1
            }) : t.matches({
                idle: "success"
            }) && n({
                error: null,
                isError: !1,
                isSent: !0
            });
        });
    }), er = (s)=>new Promise((e)=>{
        const { changed: r } = s.send("SIGNIN_ANONYMOUS");
        r || e({
            isSuccess: !1,
            isError: !0,
            error: k,
            user: null,
            accessToken: null,
            refreshToken: null
        }), s.onTransition((n)=>{
            n.matches({
                authentication: "signedIn"
            }) && e({
                isSuccess: !0,
                isError: !1,
                error: null,
                user: n.context.user,
                accessToken: n.context.accessToken.value,
                refreshToken: n.context.refreshToken.value
            }), n.matches({
                authentication: {
                    signedOut: "failed"
                }
            }) && e({
                isSuccess: !1,
                isError: !0,
                error: n.context.errors.authentication || null,
                user: null,
                accessToken: null,
                refreshToken: null
            });
        });
    }), rr = (s, e, r)=>new Promise((n)=>{
        const { changed: t, context: i } = s.send("SIGNIN_PASSWORD", {
            email: e,
            password: r
        });
        if (!t) return n({
            accessToken: i.accessToken.value,
            refreshToken: i.refreshToken.value,
            error: k,
            isError: !0,
            isSuccess: !1,
            needsEmailVerification: !1,
            needsMfaOtp: !1,
            mfa: null,
            user: i.user
        });
        s.onTransition((u)=>{
            u.matches({
                authentication: {
                    signedOut: "noErrors"
                },
                registration: {
                    incomplete: "needsEmailVerification"
                }
            }) ? n({
                accessToken: null,
                refreshToken: null,
                error: null,
                isError: !1,
                isSuccess: !1,
                needsEmailVerification: !0,
                needsMfaOtp: !1,
                mfa: null,
                user: null
            }) : u.matches({
                authentication: {
                    signedOut: "needsMfa"
                }
            }) ? n({
                accessToken: null,
                refreshToken: null,
                error: null,
                isError: !1,
                isSuccess: !1,
                needsEmailVerification: !1,
                needsMfaOtp: !0,
                mfa: u.context.mfa,
                user: null
            }) : u.matches({
                authentication: {
                    signedOut: "failed"
                }
            }) ? n({
                accessToken: null,
                refreshToken: null,
                error: u.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                needsEmailVerification: !1,
                needsMfaOtp: !1,
                mfa: null,
                user: null
            }) : u.matches({
                authentication: "signedIn"
            }) && n({
                accessToken: u.context.accessToken.value,
                refreshToken: u.context.refreshToken.value,
                error: null,
                isError: !1,
                isSuccess: !0,
                needsEmailVerification: !1,
                needsMfaOtp: !1,
                mfa: null,
                user: u.context.user
            });
        });
    }), re = (s, e, r)=>new Promise((n)=>{
        const { changed: t } = s.send("PASSWORDLESS_EMAIL", {
            email: e,
            options: r
        });
        if (!t) return n({
            error: k,
            isError: !0,
            isSuccess: !1
        });
        s.onTransition((i)=>{
            i.matches("registration.incomplete.failed") ? n({
                error: i.context.errors.registration || null,
                isError: !0,
                isSuccess: !1
            }) : i.matches({
                authentication: {
                    signedOut: "noErrors"
                },
                registration: {
                    incomplete: "needsEmailVerification"
                }
            }) && n({
                error: null,
                isError: !1,
                isSuccess: !0
            });
        });
    }), nr = (s, e)=>new Promise((r)=>{
        const { changed: n, context: t } = s.send({
            type: "SIGNIN_SECURITY_KEY_EMAIL",
            email: e
        });
        if (!n) return r({
            accessToken: t.accessToken.value,
            refreshToken: t.refreshToken.value,
            error: k,
            isError: !0,
            isSuccess: !1,
            needsEmailVerification: !1,
            user: t.user
        });
        s.onTransition((i)=>{
            i.matches({
                authentication: {
                    signedOut: "noErrors"
                },
                registration: {
                    incomplete: "needsEmailVerification"
                }
            }) ? r({
                accessToken: null,
                refreshToken: null,
                error: null,
                isError: !1,
                isSuccess: !1,
                needsEmailVerification: !0,
                user: null
            }) : i.matches({
                authentication: {
                    signedOut: "failed"
                }
            }) ? r({
                accessToken: null,
                refreshToken: null,
                error: i.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                needsEmailVerification: !1,
                user: null
            }) : i.matches({
                authentication: "signedIn"
            }) && r({
                accessToken: i.context.accessToken.value,
                refreshToken: i.context.refreshToken.value,
                error: null,
                isError: !1,
                isSuccess: !0,
                needsEmailVerification: !1,
                user: i.context.user
            });
        });
    });
function ne(s) {
    return {
        error: s.message || "Something went wrong!",
        status: s.status || 1,
        message: s.message || "Something went wrong!"
    };
}
const sr = async (s, e)=>{
    var u, f;
    const r = (u = s.interpreter) == null ? void 0 : u.getSnapshot(), n = r == null ? void 0 : r.context.accessToken.value;
    let t;
    try {
        t = (await I("".concat(s.backendUrl, "/elevate/webauthn"), {
            email: e
        }, n)).data;
    } catch (d) {
        return {
            error: ne(d),
            isError: !0,
            isSuccess: !1,
            elevated: !1
        };
    }
    let i;
    try {
        i = await j(t);
    } catch (d) {
        return {
            error: ne(d),
            isError: !0,
            isSuccess: !1,
            elevated: !1
        };
    }
    try {
        const { data: { session: d }, error: h } = await I("".concat(s.backendUrl, "/elevate/webauthn/verify"), {
            email: e,
            credential: i
        }, n);
        return d && !h ? ((f = s.interpreter) == null || f.send({
            type: "SESSION_UPDATE",
            data: {
                session: d
            }
        }), {
            error: null,
            isError: !1,
            isSuccess: !0,
            elevated: !0
        }) : {
            error: h,
            isError: !0,
            isSuccess: !1,
            elevated: !1
        };
    } catch (d) {
        const { error: h } = d;
        return {
            error: h,
            isError: !0,
            isSuccess: !1,
            elevated: !1
        };
    }
}, tr = (s, e, r)=>new Promise((n)=>{
        const { changed: t, context: i } = s.send("SIGNIN_MFA_TOTP", {
            otp: e,
            ticket: r
        });
        if (!t) return n({
            accessToken: i.accessToken.value,
            refreshToken: i.refreshToken.value,
            error: k,
            isError: !0,
            isSuccess: !1,
            user: i.user
        });
        s.onTransition((u)=>{
            u.matches({
                authentication: {
                    signedOut: "failed"
                }
            }) ? n({
                accessToken: null,
                refreshToken: null,
                error: u.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                user: null
            }) : u.matches({
                authentication: "signedIn"
            }) && n({
                accessToken: u.context.accessToken.value,
                refreshToken: u.context.refreshToken.value,
                error: null,
                isError: !1,
                isSuccess: !0,
                user: u.context.user
            });
        });
    }), ir = (s, e)=>new Promise((r)=>{
        const { changed: n } = s.send("SIGNIN_PAT", {
            pat: e
        });
        n || r({
            isSuccess: !1,
            isError: !0,
            error: k,
            user: null,
            accessToken: null,
            refreshToken: null
        }), s.onTransition((t)=>{
            if (t.matches({
                authentication: {
                    signedOut: "failed"
                }
            })) return r({
                accessToken: null,
                refreshToken: null,
                user: null,
                error: t.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1
            });
            if (t.matches({
                authentication: "signedIn"
            })) return r({
                accessToken: t.context.accessToken.value,
                refreshToken: t.context.refreshToken.value,
                user: t.context.user,
                error: null,
                isError: !1,
                isSuccess: !0
            });
        });
    }), se = (s, e, r)=>new Promise((n)=>{
        const { changed: t } = s.send("PASSWORDLESS_SMS", {
            phoneNumber: e,
            options: r
        });
        if (!t) return n({
            error: k,
            isError: !0,
            isSuccess: !1,
            needsOtp: !1
        });
        s.onTransition((i)=>{
            i.matches("registration.incomplete.needsOtp") ? n({
                error: null,
                isError: !1,
                isSuccess: !1,
                needsOtp: !0
            }) : i.matches("registration.incomplete.failed") && n({
                error: i.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                needsOtp: !1
            });
        });
    }), or = (s, e, r)=>new Promise((n)=>{
        const { changed: t } = s.send({
            type: "PASSWORDLESS_SMS_OTP",
            phoneNumber: e,
            otp: r
        });
        if (!t) return n({
            error: k,
            isError: !0,
            isSuccess: !1,
            user: null,
            accessToken: null,
            refreshToken: null
        });
        s.onTransition((i)=>{
            i.matches({
                authentication: "signedIn"
            }) ? n({
                error: null,
                isError: !1,
                isSuccess: !0,
                user: i.context.user,
                accessToken: i.context.accessToken.value,
                refreshToken: i.context.refreshToken.value
            }) : i.matches({
                registration: {
                    incomplete: "failed"
                }
            }) && n({
                error: i.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                user: null,
                accessToken: null,
                refreshToken: null
            });
        });
    }), ar = async (s, e)=>new Promise((r)=>{
        const { event: n } = s.send("SIGNOUT", {
            all: e
        });
        if (n.type !== "SIGNED_OUT") return r({
            isSuccess: !1,
            isError: !0,
            error: _e
        });
        s.onTransition((t)=>{
            t.matches({
                authentication: {
                    signedOut: "success"
                }
            }) ? r({
                isSuccess: !0,
                isError: !1,
                error: null
            }) : t.matches("authentication.signedOut.failed") && r({
                isSuccess: !1,
                isError: !0,
                error: t.context.errors.signout || null
            });
        });
    }), te = (s, e, r, n, t)=>new Promise((i)=>{
        const { changed: u, context: f } = s.send("SIGNUP_EMAIL_PASSWORD", {
            email: e,
            password: r,
            options: n,
            requestOptions: t
        });
        if (!u) return i({
            error: k,
            accessToken: f.accessToken.value,
            refreshToken: f.refreshToken.value,
            isError: !0,
            isSuccess: !1,
            needsEmailVerification: !1,
            user: f.user
        });
        s.onTransition((d)=>{
            d.matches("registration.incomplete.failed") ? i({
                accessToken: null,
                refreshToken: null,
                error: d.context.errors.registration || null,
                isError: !0,
                isSuccess: !1,
                needsEmailVerification: !1,
                user: null
            }) : d.matches({
                authentication: {
                    signedOut: "noErrors"
                },
                registration: {
                    incomplete: "needsEmailVerification"
                }
            }) ? i({
                accessToken: null,
                refreshToken: null,
                error: null,
                isError: !1,
                isSuccess: !1,
                needsEmailVerification: !0,
                user: null
            }) : d.matches({
                authentication: "signedIn",
                registration: "complete"
            }) && i({
                accessToken: d.context.accessToken.value,
                refreshToken: d.context.refreshToken.value,
                error: null,
                isError: !1,
                isSuccess: !0,
                needsEmailVerification: !1,
                user: d.context.user
            });
        });
    }), cr = (s, e, r, n)=>new Promise((t)=>{
        const { changed: i, context: u } = s.send("SIGNUP_SECURITY_KEY", {
            email: e,
            options: r,
            requestOptions: n
        });
        if (!i) return t({
            error: k,
            accessToken: u.accessToken.value,
            refreshToken: u.refreshToken.value,
            isError: !0,
            isSuccess: !1,
            needsEmailVerification: !1,
            user: u.user
        });
        s.onTransition((f)=>{
            f.matches("registration.incomplete.failed") ? t({
                accessToken: null,
                refreshToken: null,
                error: f.context.errors.registration || null,
                isError: !0,
                isSuccess: !1,
                needsEmailVerification: !1,
                user: null
            }) : f.matches({
                authentication: {
                    signedOut: "noErrors"
                },
                registration: {
                    incomplete: "needsEmailVerification"
                }
            }) ? t({
                accessToken: null,
                refreshToken: null,
                error: null,
                isError: !1,
                isSuccess: !1,
                needsEmailVerification: !0,
                user: null
            }) : f.matches({
                authentication: "signedIn",
                registration: "complete"
            }) && t({
                accessToken: f.context.accessToken.value,
                refreshToken: f.context.refreshToken.value,
                error: null,
                isError: !1,
                isSuccess: !0,
                needsEmailVerification: !1,
                user: f.context.user
            });
        });
    }), ur = (s, e, r)=>new Promise((n)=>{
        const { changed: t } = s.send("SIGNIN_EMAIL_OTP", {
            email: e,
            options: r
        });
        if (!t) return n({
            error: k,
            isError: !0,
            isSuccess: !1,
            needsOtp: !1
        });
        s.onTransition((i)=>{
            i.matches("registration.incomplete.needsOtp") ? n({
                error: null,
                isError: !1,
                isSuccess: !0,
                needsOtp: !0
            }) : i.matches("registration.incomplete.failed") && n({
                error: i.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                needsOtp: !1
            });
        });
    }), lr = (s, e, r)=>new Promise((n)=>{
        const { changed: t } = s.send({
            type: "VERIFY_EMAIL_OTP",
            email: e,
            otp: r
        });
        if (!t) return n({
            error: k,
            isError: !0,
            isSuccess: !1,
            user: null,
            accessToken: null,
            refreshToken: null
        });
        s.onTransition((i)=>{
            i.matches({
                authentication: "signedIn"
            }) ? n({
                error: null,
                isError: !1,
                isSuccess: !0,
                user: i.context.user,
                accessToken: i.context.accessToken.value,
                refreshToken: i.context.refreshToken.value
            }) : i.matches({
                registration: {
                    incomplete: "failed"
                }
            }) && n({
                error: i.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                user: null,
                accessToken: null,
                refreshToken: null
            });
        });
    }), dr = (s, param)=>{
    let { provider: e, idToken: r, nonce: n } = param;
    return new Promise((t)=>{
        const { changed: i } = s.send("SIGNIN_ID_TOKEN", {
            provider: e,
            idToken: r,
            ...n && {
                nonce: n
            }
        });
        i || t({
            isSuccess: !1,
            isError: !0,
            error: k,
            user: null,
            accessToken: null,
            refreshToken: null
        }), s.onTransition((u)=>{
            if (u.matches({
                authentication: {
                    signedOut: "failed"
                }
            })) return t({
                accessToken: null,
                refreshToken: null,
                user: null,
                error: u.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1
            });
            if (u.matches({
                authentication: "signedIn"
            })) return t({
                accessToken: u.context.accessToken.value,
                refreshToken: u.context.refreshToken.value,
                user: u.context.user,
                error: null,
                isError: !1,
                isSuccess: !0
            });
        });
    });
}, fr = async (param, param1)=>{
    let { backendUrl: s, interpreter: e } = param, { provider: r, idToken: n, nonce: t } = param1;
    try {
        return await I("".concat(s, "/link/idtoken"), {
            provider: r,
            idToken: n,
            ...t && {
                nonce: t
            }
        }, e == null ? void 0 : e.getSnapshot().context.accessToken.value), {
            isError: !1,
            error: null,
            isSuccess: !0
        };
    } catch (i) {
        const { error: u } = i;
        return {
            isError: !0,
            error: u,
            isSuccess: !1
        };
    }
}, hr = (s)=>new Promise((e)=>{
        const { changed: r, context: n } = s.send({
            type: "SIGNIN_SECURITY_KEY"
        });
        if (!r) return e({
            accessToken: n.accessToken.value,
            refreshToken: n.refreshToken.value,
            error: k,
            isError: !0,
            isSuccess: !1,
            needsEmailVerification: !1,
            user: n.user
        });
        s.onTransition((t)=>{
            t.matches({
                authentication: {
                    signedOut: "noErrors"
                },
                registration: {
                    incomplete: "needsEmailVerification"
                }
            }) ? e({
                accessToken: null,
                refreshToken: null,
                error: null,
                isError: !1,
                isSuccess: !1,
                needsEmailVerification: !0,
                user: null
            }) : t.matches({
                authentication: {
                    signedOut: "failed"
                }
            }) ? e({
                accessToken: null,
                refreshToken: null,
                error: t.context.errors.authentication || null,
                isError: !0,
                isSuccess: !1,
                needsEmailVerification: !1,
                user: null
            }) : t.matches({
                authentication: "signedIn"
            }) && e({
                accessToken: t.context.accessToken.value,
                refreshToken: t.context.refreshToken.value,
                error: null,
                isError: !1,
                isSuccess: !0,
                needsEmailVerification: !1,
                user: t.context.user
            });
        });
    }), mr = async (param, param1)=>{
    let { backendUrl: s, interpreter: e } = param, { expiresAt: r, metadata: n } = param1;
    try {
        const { data: t } = await I("".concat(s, "/pat"), {
            expiresAt: r.toISOString(),
            metadata: n
        }, e == null ? void 0 : e.getSnapshot().context.accessToken.value);
        return {
            data: t ? {
                id: t.id || null,
                personalAccessToken: t.personalAccessToken || null
            } : null,
            isError: !1,
            error: null,
            isSuccess: !0
        };
    } catch (t) {
        const { error: i } = t;
        return {
            isError: !0,
            error: i,
            isSuccess: !1,
            data: null
        };
    }
};
class Rr {
    /**
   * Use `nhost.auth.signUp` to sign up a user using email and password. If you want to sign up a user using passwordless email (Magic Link), SMS, or an OAuth provider, use the `signIn` function instead.
   *
   * @example
   * ### Sign up with an email and password
   * ```ts
   * nhost.auth.signUp({
   *   email: 'joe@example.com',
   *   password: 'secret-password'
   * })
   * ```
   *
   * @example
   * ### Sign up with a security key
   * ```ts
   * nhost.auth.signUp({
   *   email: 'joe@example.com',
   *   securityKey: true
   * })
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/sign-up
   */ async signUp(e, r) {
        const n = await this.waitUntilReady();
        if ("securityKey" in e) {
            const { email: f, options: d } = e;
            return A(await cr(n, f, d, r));
        }
        const { email: t, password: i, options: u } = e;
        return A(await te(n, t, i, u, r));
    }
    /**
   * Use `nhost.auth.connectProvider` to connect a social authentication provider to an existing user account
   *
   * @example
   * ### Connect an authentication provider to an existing user account
   * ```ts
   * nhost.auth.connectProvider({
   *   provider: 'github
   *   options: {
   *    redirectTo: window.location.href
   *   }
   * })
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/connect-provider
   */ async connectProvider(e) {
        const n = (await this.waitUntilReady()).getSnapshot().context.accessToken.value, { provider: t, options: i } = e, u = F("".concat(this._client.backendUrl, "/signin/provider/").concat(t), S(this._client.clientUrl, {
            ...i,
            connect: n
        }));
        return L() && (window.location.href = u), {
            providerUrl: u
        };
    }
    /**
   * Use `nhost.auth.signInIdToken` to sign in a user with the provider's account using an ID token
   *
   * @example
   * ### Sign in a user with an id token
   * ```ts
   * nhost.auth.signInIdToken({
   *   provider: 'google', // The provider name, e.g., 'google', 'apple', etc.
   *   idToken: '...', // The ID token issued by the provider.
   *   nonce: '...', // Optional: The nonce used during token generation.
   * });
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/sign-in-idtoken
   */ async signInIdToken(e) {
        const r = await this.waitUntilReady(), n = await dr(r, e);
        return {
            ...A(n),
            mfa: null
        };
    }
    /**
   * Use `nhost.auth.linkIdToken` to link a user account with the provider's account using an ID token
   *
   * @example
   * ### Link a user account with the provider's account using an id token
   * ```ts
   * nhost.auth.linkIdToken({
   *   provider: 'google', // The provider name, e.g., 'google', 'apple', etc.
   *   idToken: '...', // The ID token issued by the provider.
   *   nonce: '...', // Optional: The nonce used during token generation.
   * })
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/link-idtoken
   */ async linkIdToken(e) {
        return fr(this._client, e);
    }
    /**
   * Use `nhost.auth.signIn` to sign in a user using email and password, passwordless (email or sms) or an external provider. `signIn` can be used to sign in a user in various ways depending on the parameters.
   *
   * @example
   * ### Sign in a user using email and password
   * ```ts
   * nhost.auth.signIn({
   *   email: 'joe@example.com',
   *   password: 'secret-password'
   * })
   * ```
   *
   * @example
   * ### Sign in a user using an OAuth provider (e.g: Google or Facebook)
   * ```ts
   * nhost.auth.signIn({ provider: 'google' })
   * ```
   *
   * @example
   * ### Sign in a user using passwordless email (Magic Link)
   * ```ts
   * nhost.auth.signIn({ email: 'joe@example.com' })
   * ```
   *
   * @example
   * ### Sign in a user using passwordless SMS
   * ```ts
   * // [step 1/2] Passwordless sign in using SMS
   * nhost.auth.signIn({ phoneNumber: '+11233213123' })
   *
   * // [step 2/2] Finish passwordless sign in using SMS (OTP)
   * nhost.auth.signIn({ phoneNumber: '+11233213123', otp: '123456' })
   * ```
   *
   * @example
   * ### Sign in anonymously
   * ```ts
   * // Sign in anonymously
   * nhost.auth.signIn()
   *
   * // Later in the application, the user can complete their registration
   * nhost.auth.signUp({
   *   email: 'joe@example.com',
   *   password: 'secret-password'
   * })
   * ```
   *
   * @example
   * ### Sign in with a security key
   * ```ts
   * nhost.auth.signIn({
   *   email: 'joe@example.com',
   *   securityKey: true
   * })
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/sign-in
   */ async signIn(e) {
        const r = await this.waitUntilReady();
        if (!e) {
            const n = await er(r);
            return {
                ...A(n),
                mfa: null
            };
        }
        if ("provider" in e) {
            const { provider: n, options: t } = e, i = F("".concat(this._client.backendUrl, "/signin/provider/").concat(n), S(this._client.clientUrl, t));
            return L() && (window.location.href = i), {
                providerUrl: i,
                provider: n,
                session: null,
                mfa: null,
                error: null
            };
        }
        if ("email" in e && "password" in e) {
            const n = await rr(r, e.email, e.password);
            return n.needsEmailVerification ? {
                session: null,
                mfa: null,
                error: ve
            } : n.needsMfaOtp ? {
                session: null,
                mfa: n.mfa,
                error: null
            } : {
                ...A(n),
                mfa: null
            };
        }
        if ("email" in e && "securityKey" in e) {
            if (e.securityKey !== !0) throw Error("securityKey must be true");
            const n = await nr(r, e.email);
            return {
                ...A(n),
                mfa: null
            };
        }
        if ("email" in e) {
            const { email: n, options: t } = e, { error: i } = await re(r, n, t);
            return {
                session: null,
                mfa: null,
                error: i
            };
        }
        if ("phoneNumber" in e && "otp" in e) {
            const n = await or(r, e.phoneNumber, e.otp);
            return {
                ...A(n),
                mfa: null
            };
        }
        if ("phoneNumber" in e) {
            const { error: n } = await se(r, e.phoneNumber, e.options);
            return {
                error: n,
                mfa: null,
                session: null
            };
        }
        if ("otp" in e) {
            const n = await tr(r, e.otp, e.ticket);
            return {
                ...A(n),
                mfa: null
            };
        }
        return {
            error: Oe,
            mfa: null,
            session: null
        };
    }
    /**
   * Use `nhost.auth.signInPAT` to sign in with a personal access token (PAT).
   *
   * @example
   * ```ts
   * nhost.auth.signInPAT('34f74930-09c0-4af5-a8d5-28fad78e3415')
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/sign-in-pat
   *
   * @param personalAccessToken - The personal access token to sign in with
   */ async signInPAT(e) {
        const r = await this.waitUntilReady(), n = await ir(r, e);
        return A(n);
    }
    /**
   * Use `nhost.auth.signInEmailOTP` to sign in with an email one-time password (OTP).
   *
   * @example
   * ```ts
   * nhost.auth.signInEmailOTP('user@example.com')
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/sign-in-email-otp
   *
   * @param email - The email address to send the OTP to
   */ async signInEmailOTP(e, r) {
        const n = await this.waitUntilReady(), { error: t } = await ur(n, e, r);
        return {
            error: t,
            session: null,
            mfa: null
        };
    }
    /**
   * Use `nhost.auth.verifyEmailOTP` to verify an email one-time password (OTP) and complete the sign-in process
   *
   * @example
   * ```ts
   * nhost.auth.verifyEmailOTP('user@example.com', '123456')
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/verify-email-otp
   *
   * @param email - The email address to verify the OTP for
   * @param otp - The one-time password sent to the email address
   */ async verifyEmailOTP(e, r) {
        const n = await this.waitUntilReady(), t = await lr(n, e, r);
        return {
            ...A(t),
            mfa: null
        };
    }
    /**
   * Use `nhost.auth.signInSecurityKey` to sign in a user with a security key using the WebAuthn API
   *
   * @example
   * ```ts
   * nhost.auth.signInSecurityKey()
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/sign-in-security-key
   */ async signInSecurityKey() {
        const e = await this.waitUntilReady(), r = await hr(e);
        return {
            ...A(r),
            mfa: null
        };
    }
    /**
   * Use `nhost.auth.signOut` to sign out the user.
   *
   * @example
   * ### Sign out the user from current device
   * ```ts
   * nhost.auth.signOut()
   * ```
   *
   * @example
   * ### Sign out the user from all devices
   * ```ts
   * nhost.auth.signOut({all: true})
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/sign-out
   */ async signOut(e) {
        const r = await this.waitUntilReady(), { error: n } = await ar(r, e == null ? void 0 : e.all);
        return {
            error: n
        };
    }
    /**
   * Use `nhost.auth.resetPassword` to reset the password for a user. This will send a reset-password link in an email to the user. When the user clicks the reset-password link the user is automatically signed-in. Once signed-in, the user can change their password using `nhost.auth.changePassword()`.
   *
   * @example
   * ```ts
   * nhost.auth.resetPassword({email: 'joe@example.com' })
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/reset-password
   */ async resetPassword(param) {
        let { email: e, options: r } = param;
        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpret"])(Fe(this._client)).start(), { error: t } = await Ze(n, e, r);
        return {
            error: t
        };
    }
    /**
   * Use `nhost.auth.changePassword` to change the password for the signed-in user. The old password is not needed. In case the user is not signed-in, a password reset ticket needs to be provided.
   *
   * @example
   * ```ts
   * nhost.auth.changePassword({ newPassword: 'new-secret-password' })
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/change-password
   */ async changePassword(param) {
        let { newPassword: e, ticket: r } = param;
        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpret"])(je(this._client)).start(), { error: t } = await Xe(n, e, r);
        return {
            error: t
        };
    }
    /**
   * Use `nhost.auth.sendVerificationEmail` to send a verification email to the specified email. The email contains a verification-email link. When the user clicks the verification-email link their email is verified.
   *
   * @example
   * ```ts
   * nhost.auth.sendVerificationEmail({ email: 'joe@example.com' })
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/send-verification-email
   */ async sendVerificationEmail(param) {
        let { email: e, options: r } = param;
        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpret"])(Be(this._client)).start(), { error: t } = await Je(n, e, r);
        return {
            error: t
        };
    }
    /**
   * Use `nhost.auth.changeEmail` to change a user's email. This will send a confirm-email-change link in an email to the new email. Once the user clicks on the confirm-email-change link the email will be change to the new email.
   *
   * @example
   * ```ts
   * nhost.auth.changeEmail({ newEmail: 'doe@example.com' })
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/change-email
   */ async changeEmail(param) {
        let { newEmail: e, options: r } = param;
        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpret"])(Ye(this._client)).start(), { error: t } = await Qe(n, e, r);
        return {
            error: t
        };
    }
    /**
   * Use `nhost.auth.deanonymize` to deanonymize a user.
   *
   * @example
   * ```ts
   * nhost.auth.deanonymize({signInMethod: 'email-password', email: 'joe@example.com' })
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/deanonymize
   */ async deanonymize(e) {
        const r = await this.waitUntilReady();
        if (e.signInMethod === "passwordless") {
            if (e.connection === "email") {
                const { error: n } = await re(r, e.email, e.options);
                return {
                    error: n
                };
            }
            if (e.connection === "sms") {
                const { error: n } = await se(r, e.phoneNumber, e.options);
                return {
                    error: n
                };
            }
        }
        if (e.signInMethod === "email-password") {
            const { error: n } = await te(r, e.email, e.password, e.options);
            return {
                error: n
            };
        }
        throw Error("Unknown deanonymization method");
    }
    /**
   * Use `nhost.auth.addSecurityKey` to add a security key to the user, using the WebAuthn API.
   * @param nickname optional human-readable nickname for the security key
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/add-security-key
   */ async addSecurityKey(e) {
        const { error: r, key: n } = await ze(this._client, e);
        return {
            error: r,
            key: n
        };
    }
    /**
   * Use `nhost.auth.elevateEmailSecurityKey` to get a temporary elevated auth permissions to run sensitive operations.
   * @param email user email
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/elevate-email-security-key
   */ async elevateEmailSecurityKey(e) {
        if (!e) throw Error("A user email is required");
        return {
            ...await sr(this._client, e),
            mfa: null
        };
    }
    /**
   * Use `nhost.auth.createPAT` to create a personal access token for the user.
   *
   * @param expiresAt Expiration date for the token
   * @param metadata Optional metadata to store with the token
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/create-pat
   */ async createPAT(e, r) {
        return mr(this._client, {
            expiresAt: e,
            metadata: r
        });
    }
    /**
   * Use `nhost.auth.onTokenChanged` to add a custom function that runs every time the access or refresh token is changed.
   *
   *
   * @example
   * ```ts
   * nhost.auth.onTokenChanged(() => console.log('The access and refresh token has changed'));
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/on-token-changed
   */ onTokenChanged(e) {
        return this._client.subscribe(()=>{
            var n;
            const r = (n = this._client.interpreter) == null ? void 0 : n.onTransition((param)=>{
                let { event: t, context: i } = param;
                t.type === "TOKEN_CHANGED" && e(M(i));
            });
            return ()=>r == null ? void 0 : r.stop();
        });
    }
    /**
   * Use `nhost.auth.onAuthStateChanged` to add a custom function that runs every time the authentication status of the user changes. E.g. add a custom function that runs every time the authentication status changes from signed-in to signed-out.
   *
   * @example
   * ```ts
   * nhost.auth.onAuthStateChanged((event, session) => {
   *   console.log(`The auth state has changed. State is now ${event} with session: ${session}`)
   * });
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/on-auth-state-changed
   */ onAuthStateChanged(e) {
        return this._client.subscribe(()=>{
            var n;
            const r = (n = this._client.interpreter) == null ? void 0 : n.onTransition((param)=>{
                let { event: t, context: i } = param;
                (t.type === "SIGNED_IN" || t.type === "SIGNED_OUT") && e(t.type, M(i));
            });
            return ()=>r == null ? void 0 : r.stop();
        });
    }
    /**
   * Use `nhost.auth.isAuthenticated` to check if the user is authenticated or not.
   *
   * Note: `nhost.auth.isAuthenticated()` can return `false` for two reasons:
   * 1. The user is not authenticated
   * 2. The user is not authenticated but _might_ be authenticated soon (loading) because there is a network request in transit.
   *
   * Use `nhost.auth.getAuthenticationStatus` to get both authentication and loading status.
   *
   * @example
   * ```ts
   * const isAuthenticated = nhost.auth.isAuthenticated();
   *
   * if (isAuthenticated) {
   *   console.log('User is authenticated');
   * }
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/is-authenticated
   */ isAuthenticated() {
        var e;
        return !!((e = this._client.interpreter) != null && e.getSnapshot().matches({
            authentication: "signedIn"
        }));
    }
    /**
   * Use `nhost.auth.isAuthenticatedAsync` to wait (await) for any internal authentication network requests to finish and then return the authentication status.
   *
   * The promise won't resolve until the authentication status is known.
   * Attention: when using auto-signin and a refresh token is present in the client storage, the promise won't resolve if the server can't be reached (e.g. offline) or if it returns an internal error.
   *
   * @example
   * ```ts
   * const isAuthenticated  = await nhost.auth.isAuthenticatedAsync();
   *
   * if (isAuthenticated) {
   *   console.log('User is authenticated');
   * }
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/is-authenticated-async
   */ async isAuthenticatedAsync() {
        return (await this.waitUntilReady()).getSnapshot().matches({
            authentication: "signedIn"
        });
    }
    /**
   * Use `nhost.auth.getAuthenticationStatus` to get the authentication status of the user.
   *
   * If `isLoading` is `true`, the client doesn't know whether the user is authenticated yet or not
   * because some internal authentication network requests have not been resolved yet.
   *
   * The `connectionAttempts` returns the number of times the client has tried to connect to the server with no success (offline, or the server retruned an internal error).
   *
   * @example
   * ```ts
   * const { isAuthenticated, isLoading } = nhost.auth.getAuthenticationStatus();
   *
   * if (isLoading) {
   *   console.log('Loading...')
   * }
   *
   * if (isAuthenticated) {
   *   console.log('User is authenticated');
   * }
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/get-authentication-status
   */ getAuthenticationStatus() {
        var r;
        const e = ((r = this.client.interpreter) == null ? void 0 : r.getSnapshot().context.importTokenAttempts) || 0;
        return this.isReady() ? {
            isAuthenticated: this.isAuthenticated(),
            isLoading: !1,
            connectionAttempts: e
        } : {
            isAuthenticated: !1,
            isLoading: !0,
            connectionAttempts: e
        };
    }
    /**
   * Use `nhost.auth.getAccessToken` to get the access token of the user.
   *
   * @example
   * ```ts
   * const accessToken = nhost.auth.getAccessToken();
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/get-access-token
   */ getAccessToken() {
        var e, r;
        return (r = (e = this._client.interpreter) == null ? void 0 : e.getSnapshot().context.accessToken.value) != null ? r : void 0;
    }
    /**
   * Use `nhost.auth.getDecodedAccessToken` to get the decoded access token of the user.
   *
   * @example
   * ```ts
   * const decodedAccessToken = nhost.auth.getDecodedAccessToken();
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/get-decoded-access-token
   */ getDecodedAccessToken() {
        const e = this.getAccessToken();
        return e ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(e) : null;
    }
    /**
   * Use `nhost.auth.getHasuraClaims` to get the Hasura claims of the user.
   *
   * @example
   * ```ts
   * const hasuraClaims = nhost.auth.getHasuraClaims();
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/get-hasura-claims
   */ getHasuraClaims() {
        var e;
        return ((e = this.getDecodedAccessToken()) == null ? void 0 : e["https://hasura.io/jwt/claims"]) || null;
    }
    /**
   * Use `nhost.auth.getHasuraClaim` to get the value of a specific Hasura claim of the user.
   *
   * @example
   * ```ts
   * // if `x-hasura-company-id` exists as a custom claim
   * const companyId = nhost.auth.getHasuraClaim('company-id')
   * ```
   *
   * @param name Name of the variable. You don't have to specify `x-hasura-`.
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/get-hasura-claim
   */ getHasuraClaim(e) {
        var r;
        return ((r = this.getHasuraClaims()) == null ? void 0 : r[e.startsWith("x-hasura-") ? e : "x-hasura-".concat(e)]) || null;
    }
    /**
   *
   * Use `nhost.auth.refreshSession` to refresh the session with either the current internal refresh token or an external refresh token.
   *
   * Note: The Nhost client automatically refreshes the session when the user is authenticated but `nhost.auth.refreshSession` can be useful in some special cases.
   *
   * @example
   * ```ts
   * // Refresh the session with the the current internal refresh token.
   * nhost.auth.refreshSession();
   *
   * // Refresh the session with an external refresh token.
   * nhost.auth.refreshSession(refreshToken);
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/refresh-session
   */ async refreshSession(e) {
        try {
            const r = await this.waitUntilReady();
            return new Promise((n)=>{
                const t = e || r.getSnapshot().context.refreshToken.value;
                if (!t) return n({
                    session: null,
                    error: Ae
                });
                const { changed: i } = r.send("TRY_TOKEN", {
                    token: t
                });
                if (!i) return n({
                    session: null,
                    error: Re
                });
                r.onTransition((u)=>{
                    u.matches({
                        token: {
                            idle: "error"
                        }
                    }) ? n({
                        session: null,
                        // * TODO get the error from xstate once it is implemented
                        error: Pe
                    }) : u.event.type === "TOKEN_CHANGED" && n({
                        session: M(u.context),
                        error: null
                    });
                });
            });
        } catch (r) {
            return {
                session: null,
                error: r.message
            };
        }
    }
    /**
   *
   * Use `nhost.auth.getSession()` to get the session of the user.
   *
   * @example
   * ```ts
   * const session = nhost.auth.getSession();
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/get-session
   */ getSession() {
        var e, r;
        return M((r = (e = this._client.interpreter) == null ? void 0 : e.getSnapshot()) == null ? void 0 : r.context);
    }
    /**
   * Initialize the auth client with an existing session
   *
   * @example
   * ### Initialize with an existing Nhost session
   * ```ts
   * await nhost.auth.initWithSession({ session: initialSession })
   * ```
   *
   * @param session - The Nhost session object to initialize the client with
   * @docs https://docs.nhost.io/reference/javascript/auth/init-with-session
   */ async initWithSession(param) {
        let { session: e } = param;
        this.client.start({
            initialSession: e
        }), await this.waitUntilReady();
    }
    /**
   *
   * Use `nhost.auth.getUser()` to get the signed-in user.
   *
   * @example
   * ```ts
   * const user = nhost.auth.getUser();
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/auth/get-user
   */ getUser() {
        var e, r, n;
        return ((n = (r = (e = this._client.interpreter) == null ? void 0 : e.getSnapshot()) == null ? void 0 : r.context) == null ? void 0 : n.user) || null;
    }
    /**
   * Make sure the state machine is set, and wait for it to be ready
   * @returns
   */ waitUntilReady() {
        const r = this._client.interpreter;
        if (!r) throw Error("Auth interpreter not set");
        return r.getSnapshot().hasTag("loading") ? new Promise((n, t)=>{
            let i = setTimeout(()=>t("The state machine is not yet ready after 15 seconds."), 15e3);
            r.onTransition((u)=>{
                if (!u.hasTag("loading")) return clearTimeout(i), n(r);
            });
        }) : Promise.resolve(r);
    }
    isReady() {
        var e, r;
        return !((r = (e = this._client.interpreter) == null ? void 0 : e.getSnapshot()) != null && r.hasTag("loading"));
    }
    get client() {
        return this._client;
    }
    constructor({ url: e, broadcastKey: r, autoRefreshToken: n = !0, autoSignIn: t = !0, clientStorage: i, clientStorageType: u, refreshIntervalTime: f, start: d = !0 }){
        var h;
        this.url = e, this._client = new Ee({
            backendUrl: e,
            clientUrl: typeof window != "undefined" && ((h = window.location) == null ? void 0 : h.origin) || "",
            broadcastKey: r,
            autoRefreshToken: n,
            autoSignIn: t,
            start: d,
            clientStorage: i,
            clientStorageType: u,
            refreshIntervalTime: f
        });
    }
}
;
 //# sourceMappingURL=index.esm.js.map
}),
}]);

//# sourceMappingURL=c9186_%40nhost_hasura-auth-js_dist_index_esm_a14f744a.js.map
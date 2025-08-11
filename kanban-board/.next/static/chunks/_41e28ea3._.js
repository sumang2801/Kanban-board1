(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ProtectedRoute.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ProtectedRoute
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.6_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$nhost$2b$react$40$3$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_graphql$40$16$2e$11$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$nhost$2f$react$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@nhost+react@3.11.1_@types+react@19.1.9_graphql@16.11.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@nhost/react/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$nhost$2b$react$40$3$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_graphql$40$16$2e$11$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$nhost$2f$react$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@nhost+react@3.11.1_@types+react@19.1.9_graphql@16.11.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@nhost/react/dist/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.6_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.6_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProtectedRoute(param) {
    let { children } = param;
    _s();
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$nhost$2b$react$40$3$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_graphql$40$16$2e$11$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$nhost$2f$react$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuthenticationStatus"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProtectedRoute.useEffect": ()=>{
            if (!isLoading && !isAuthenticated) {
                router.replace("/auth");
            }
        }
    }["ProtectedRoute.useEffect"], [
        isAuthenticated,
        isLoading,
        router
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/components/ProtectedRoute.tsx",
        lineNumber: 16,
        columnNumber: 25
    }, this);
    if (!isAuthenticated) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ProtectedRoute, "ne8mBmMf5q6kFBdLdsWK/fF6rW0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$nhost$2b$react$40$3$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_graphql$40$16$2e$11$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$nhost$2f$react$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuthenticationStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/boards/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BoardListPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.6_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$11$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.11.0/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProtectedRoute.tsx [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query GetBoards {\n    boards {\n      id\n      name\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const GET_BOARDS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$11$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject());
function BoardListPage() {
    var _data_boards;
    _s();
    const { data, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(GET_BOARDS);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/boards/page.tsx",
            lineNumber: 20,
            columnNumber: 9
        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "Error: ",
                error.message
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/boards/page.tsx",
            lineNumber: 22,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Boards"
                }, void 0, false, {
                    fileName: "[project]/src/app/boards/page.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: data === null || data === void 0 ? void 0 : (_data_boards = data.boards) === null || _data_boards === void 0 ? void 0 : _data_boards.map((board)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: board.name
                        }, board.id, false, {
                            fileName: "[project]/src/app/boards/page.tsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/boards/page.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/boards/page.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/boards/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(BoardListPage, "tP+6C5plfRwxqCbBj3cMUcL7Opk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = BoardListPage;
var _c;
__turbopack_context__.k.register(_c, "BoardListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "_": ()=>_tagged_template_literal
});
function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
;
}),
"[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useSyncExternalStore": ()=>useSyncExternalStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/invariantWrappers.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rehackt@0.1.0_@types+react@19.1.9_react@19.1.0/node_modules/rehackt/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$canUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/common/canUse.js [app-client] (ecmascript)");
;
;
;
var didWarnUncachedGetSnapshot = false;
// Prevent webpack from complaining about our feature detection of the
// useSyncExternalStore property of the React namespace, which is expected not
// to exist when using React 17 and earlier, and that's fine.
var uSESKey = "useSyncExternalStore";
var realHook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[uSESKey];
var useSyncExternalStore = realHook || function(subscribe, getSnapshot, getServerSnapshot) {
    // Read the current snapshot from the store on every render. Again, this
    // breaks the rules of React, and only works here because of specific
    // implementation details, most importantly that updates are
    // always synchronous.
    var value = getSnapshot();
    if (// DEVIATION: Using __DEV__
    globalThis.__DEV__ !== false && !didWarnUncachedGetSnapshot && // DEVIATION: Not using Object.is because we know our snapshots will never
    // be exotic primitive values like NaN, which is !== itself.
    value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        // DEVIATION: Using invariant.error instead of console.error directly.
        globalThis.__DEV__ !== false && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].error(68);
    }
    // Because updates are synchronous, we don't queue them. Instead we force a
    // re-render whenever the subscribed state changes by updating an some
    // arbitrary useState hook. Then, during render, we call getSnapshot to read
    // the current value.
    //
    // Because we don't actually use the state returned by the useState hook, we
    // can save a bit of memory by storing other stuff in that slot.
    //
    // To implement the early bailout, we need to track some things on a mutable
    // object. Usually, we would put that in a useRef hook, but we can stash it in
    // our useState hook instead.
    //
    // To force a re-render, we call forceUpdate({inst}). That works because the
    // new object always fails an equality check.
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        inst: {
            value: value,
            getSnapshot: getSnapshot
        }
    }), inst = _a[0].inst, forceUpdate = _a[1];
    // Track the latest getSnapshot function with a ref. This needs to be updated
    // in the layout phase so we can access it during the tearing check that
    // happens on subscribe.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$canUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseLayoutEffect"]) {
        // DEVIATION: We avoid calling useLayoutEffect when !canUseLayoutEffect,
        // which may seem like a conditional hook, but this code ends up behaving
        // unconditionally (one way or the other) because canUseLayoutEffect is
        // constant.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect(function() {
            Object.assign(inst, {
                value: value,
                getSnapshot: getSnapshot
            });
            // Whenever getSnapshot or subscribe changes, we need to check in the
            // commit phase if there was an interleaved mutation. In concurrent mode
            // this can happen all the time, but even in synchronous mode, an earlier
            // effect may have mutated the store.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({
                    inst: inst
                });
            }
        // React Hook React.useLayoutEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
    } else {
        Object.assign(inst, {
            value: value,
            getSnapshot: getSnapshot
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        // Check for changes right before subscribing. Subsequent changes will be
        // detected in the subscription handler.
        if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({
                inst: inst
            });
        }
        // Subscribe to the store and return a clean-up function.
        return subscribe(function handleStoreChange() {
            // TODO: Because there is no cross-renderer API for batching updates, it's
            // up to the consumer of this library to wrap their subscription event
            // with unstable_batchedUpdates. Should we try to detect when this isn't
            // the case and print a warning in development?
            // The store changed. Check if the snapshot changed since the last time we
            // read from the store.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({
                    inst: inst
                });
            }
        });
    // React Hook React.useEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        subscribe
    ]);
    return value;
};
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    } catch (_b) {
        return true;
    }
} //# sourceMappingURL=useSyncExternalStore.js.map
}),
"[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/parser/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DocumentType": ()=>DocumentType,
    "operationName": ()=>operationName,
    "parser": ()=>parser,
    "verifyDocumentType": ()=>verifyDocumentType
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/invariantWrappers.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$caches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/caching/caches.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/caching/sizes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$getMemoryInternals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/caching/getMemoryInternals.js [app-client] (ecmascript)");
;
;
;
var DocumentType;
(function(DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache;
function operationName(type) {
    var name;
    switch(type){
        case DocumentType.Query:
            name = "Query";
            break;
        case DocumentType.Mutation:
            name = "Mutation";
            break;
        case DocumentType.Subscription:
            name = "Subscription";
            break;
    }
    return name;
}
function parser(document) {
    if (!cache) {
        cache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$caches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoCleanedWeakCache"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheSizes"].parser || 1000 /* defaultCacheSizes.parser */ );
    }
    var cached = cache.get(document);
    if (cached) return cached;
    var variables, type, name;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!!document && !!document.kind, 70, document);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for(var _i = 0, _a = document.definitions; _i < _a.length; _i++){
        var x = _a[_i];
        if (x.kind === "FragmentDefinition") {
            fragments.push(x);
            continue;
        }
        if (x.kind === "OperationDefinition") {
            switch(x.operation){
                case "query":
                    queries.push(x);
                    break;
                case "mutation":
                    mutations.push(x);
                    break;
                case "subscription":
                    subscriptions.push(x);
                    break;
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!fragments.length || queries.length || mutations.length || subscriptions.length, 71);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, 72, document, queries.length, subscriptions.length, mutations.length);
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length) type = DocumentType.Subscription;
    var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(definitions.length === 1, 73, document, definitions.length);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === "Name") {
        name = definition.name.value;
    } else {
        name = "data"; // fallback to using data if no name
    }
    var payload = {
        name: name,
        type: type,
        variables: variables
    };
    cache.set(document, payload);
    return payload;
}
parser.resetCache = function() {
    cache = undefined;
};
if (globalThis.__DEV__ !== false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$getMemoryInternals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerGlobalCache"])("parser", function() {
        return cache ? cache.size : 0;
    });
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(operation.type === type, 74, requiredOperationName, requiredOperationName, usedOperationName);
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useApolloClient": ()=>useApolloClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/invariantWrappers.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rehackt@0.1.0_@types+react@19.1.9_react@19.1.0/node_modules/rehackt/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/context/ApolloContext.js [app-client] (ecmascript)");
;
;
;
function useApolloClient(override) {
    var context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApolloContext"])());
    var client = override || context.client;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!!client, 58);
    return client;
} //# sourceMappingURL=useApolloClient.js.map
}),
"[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/internal/wrapHook.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "wrapHook": ()=>wrapHook
});
var wrapperSymbol = Symbol.for("apollo.hook.wrappers");
function wrapHook(hookName, useHook, clientOrObsQuery) {
    var queryManager = clientOrObsQuery["queryManager"];
    var wrappers = queryManager && queryManager[wrapperSymbol];
    var wrapper = wrappers && wrappers[hookName];
    return wrapper ? wrapper(useHook) : useHook;
} //# sourceMappingURL=wrapHook.js.map
}),
"[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createMakeWatchQueryOptions": ()=>createMakeWatchQueryOptions,
    "getDefaultFetchPolicy": ()=>getDefaultFetchPolicy,
    "getObsQueryOptions": ()=>getObsQueryOptions,
    "toApolloError": ()=>toApolloError,
    "toQueryResult": ()=>toQueryResult,
    "useQuery": ()=>useQuery,
    "useQueryInternals": ()=>useQueryInternals
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
/**
 * Function parameters in this file try to follow a common order for the sake of
 * readability and consistency. The order is as follows:
 *
 * resultData
 * observable
 * client
 * query
 * options
 * watchQueryOptions
 * makeWatchQueryOptions
 * isSSRAllowed
 * disableNetworkFetches
 * partialRefetch
 * renderPromises
 * isSyncSSR
 * callbacks
 */ /** */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/globals/invariantWrappers.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rehackt@0.1.0_@types+react@19.1.9_react@19.1.0/node_modules/rehackt/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/common/mergeOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/context/ApolloContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/errors/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/core/ObservableQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/core/networkStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/parser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/common/compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$wrapHook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@apollo+client@3.13.9_@types+react@19.1.9_graphql-ws@6.0.6_graphql@16.11.0_ws@8.18.3__g_e81559768e85d9970267d55946937340/node_modules/@apollo/client/react/hooks/internal/wrapHook.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function noop() {}
var lastWatchOptions = Symbol();
function useQuery(query, options) {
    if (options === void 0) {
        options = Object.create(null);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$wrapHook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapHook"])("useQuery", // eslint-disable-next-line react-compiler/react-compiler
    useQuery_, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(options && options.client))(query, options);
}
function useQuery_(query, options) {
    var _a = useQueryInternals(query, options), result = _a.result, obsQueryFields = _a.obsQueryFields;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useQuery_.useMemo": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, result), obsQueryFields);
        }
    }["useQuery_.useMemo"], [
        result,
        obsQueryFields
    ]);
}
function useInternalState(client, query, options, renderPromises, makeWatchQueryOptions) {
    function createInternalState(previous) {
        var _a;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyDocumentType"])(query, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentType"].Query);
        var internalState = {
            client: client,
            query: query,
            observable: // See if there is an existing observable that was used to fetch the same
            // data and if so, use it instead since it will contain the proper queryId
            // to fetch the result set. This is used during SSR.
            renderPromises && renderPromises.getSSRObservable(makeWatchQueryOptions()) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableQuery"]["inactiveOnCreation"].withValue(!renderPromises, function() {
                return client.watchQuery(getObsQueryOptions(void 0, client, options, makeWatchQueryOptions()));
            }),
            resultData: {
                // Reuse previousData from previous InternalState (if any) to provide
                // continuity of previousData even if/when the query or client changes.
                previousData: (_a = previous === null || previous === void 0 ? void 0 : previous.resultData.current) === null || _a === void 0 ? void 0 : _a.data
            }
        };
        return internalState;
    }
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](createInternalState), internalState = _a[0], updateInternalState = _a[1];
    /**
     * Used by `useLazyQuery` when a new query is executed.
     * We keep this logic here since it needs to update things in unsafe
     * ways and here we at least can keep track of that in a single place.
     */ function onQueryExecuted(watchQueryOptions) {
        var _a;
        var _b;
        // this needs to be set to prevent an immediate `resubscribe` in the
        // next rerender of the `useQuery` internals
        Object.assign(internalState.observable, (_a = {}, _a[lastWatchOptions] = watchQueryOptions, _a));
        var resultData = internalState.resultData;
        updateInternalState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, internalState), {
            // might be a different query
            query: watchQueryOptions.query,
            resultData: Object.assign(resultData, {
                // We need to modify the previous `resultData` object as we rely on the
                // object reference in other places
                previousData: ((_b = resultData.current) === null || _b === void 0 ? void 0 : _b.data) || resultData.previousData,
                current: undefined
            })
        }));
    }
    if (client !== internalState.client || query !== internalState.query) {
        // If the client or query have changed, we need to create a new InternalState.
        // This will trigger a re-render with the new state, but it will also continue
        // to run the current render function to completion.
        // Since we sometimes trigger some side-effects in the render function, we
        // re-assign `state` to the new state to ensure that those side-effects are
        // triggered with the new state.
        var newInternalState = createInternalState(internalState);
        updateInternalState(newInternalState);
        return [
            newInternalState,
            onQueryExecuted
        ];
    }
    return [
        internalState,
        onQueryExecuted
    ];
}
function useQueryInternals(query, options) {
    var client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(options.client);
    var renderPromises = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApolloContext"])()).renderPromises;
    var isSyncSSR = !!renderPromises;
    var disableNetworkFetches = client.disableNetworkFetches;
    var ssrAllowed = options.ssr !== false && !options.skip;
    var partialRefetch = options.partialRefetch;
    var makeWatchQueryOptions = createMakeWatchQueryOptions(client, query, options, isSyncSSR);
    var _a = useInternalState(client, query, options, renderPromises, makeWatchQueryOptions), _b = _a[0], observable = _b.observable, resultData = _b.resultData, onQueryExecuted = _a[1];
    var watchQueryOptions = makeWatchQueryOptions(observable);
    useResubscribeIfNecessary(resultData, observable, client, options, watchQueryOptions);
    var obsQueryFields = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useQueryInternals.useMemo[obsQueryFields]": function() {
            return bindObservableMethods(observable);
        }
    }["useQueryInternals.useMemo[obsQueryFields]"], [
        observable
    ]);
    useRegisterSSRObservable(observable, renderPromises, ssrAllowed);
    var result = useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, {
        onCompleted: options.onCompleted || noop,
        onError: options.onError || noop
    });
    return {
        result: result,
        obsQueryFields: obsQueryFields,
        observable: observable,
        resultData: resultData,
        client: client,
        onQueryExecuted: onQueryExecuted
    };
}
function useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, callbacks) {
    var callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](callbacks);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useObservableSubscriptionResult.useEffect": function() {
            // Make sure state.onCompleted and state.onError always reflect the latest
            // options.onCompleted and options.onError callbacks provided to useQuery,
            // since those functions are often recreated every time useQuery is called.
            // Like the forceUpdate method, the versions of these methods inherited from
            // InternalState.prototype are empty no-ops, but we can override them on the
            // base state object (without modifying the prototype).
            // eslint-disable-next-line react-compiler/react-compiler
            callbackRef.current = callbacks;
        }
    }["useObservableSubscriptionResult.useEffect"]);
    var resultOverride = (isSyncSSR || disableNetworkFetches) && options.ssr === false && !options.skip ? // If SSR has been explicitly disabled, and this function has been called
    // on the server side, return the default loading state.
    ssrDisabledResult : options.skip || watchQueryOptions.fetchPolicy === "standby" ? // When skipping a query (ie. we're not querying for data but still want to
    // render children), make sure the `data` is cleared out and `loading` is
    // set to `false` (since we aren't loading anything).
    //
    // NOTE: We no longer think this is the correct behavior. Skipping should
    // not automatically set `data` to `undefined`, but instead leave the
    // previous data in place. In other words, skipping should not mandate that
    // previously received data is all of a sudden removed. Unfortunately,
    // changing this is breaking, so we'll have to wait until Apollo Client 4.0
    // to address this.
    skipStandbyResult : void 0;
    var previousData = resultData.previousData;
    var currentResultOverride = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useObservableSubscriptionResult.useMemo[currentResultOverride]": function() {
            return resultOverride && toQueryResult(resultOverride, previousData, observable, client);
        }
    }["useObservableSubscriptionResult.useMemo[currentResultOverride]"], [
        client,
        observable,
        resultOverride,
        previousData
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rehackt$40$0$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$0$2f$node_modules$2f$rehackt$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useObservableSubscriptionResult.useSyncExternalStore.useCallback": function(handleStoreChange) {
            // reference `disableNetworkFetches` here to ensure that the rules of hooks
            // keep it as a dependency of this effect, even though it's not used
            disableNetworkFetches;
            if (isSyncSSR) {
                return ({
                    "useObservableSubscriptionResult.useSyncExternalStore.useCallback": function() {}
                })["useObservableSubscriptionResult.useSyncExternalStore.useCallback"];
            }
            var onNext = {
                "useObservableSubscriptionResult.useSyncExternalStore.useCallback.onNext": function() {
                    var previousResult = resultData.current;
                    // We use `getCurrentResult()` instead of the onNext argument because
                    // the values differ slightly. Specifically, loading results will have
                    // an empty object for data instead of `undefined` for some reason.
                    var result = observable.getCurrentResult();
                    // Make sure we're not attempting to re-render similar results
                    if (previousResult && previousResult.loading === result.loading && previousResult.networkStatus === result.networkStatus && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previousResult.data, result.data)) {
                        return;
                    }
                    setResult(result, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
                }
            }["useObservableSubscriptionResult.useSyncExternalStore.useCallback.onNext"];
            var onError = {
                "useObservableSubscriptionResult.useSyncExternalStore.useCallback.onError": function(error) {
                    subscription.current.unsubscribe();
                    subscription.current = observable.resubscribeAfterError(onNext, onError);
                    if (!hasOwnProperty.call(error, "graphQLErrors")) {
                        // The error is not a GraphQL error
                        throw error;
                    }
                    var previousResult = resultData.current;
                    if (!previousResult || previousResult && previousResult.loading || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(error, previousResult.error)) {
                        setResult({
                            data: previousResult && previousResult.data,
                            error: error,
                            loading: false,
                            networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].error
                        }, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
                    }
                }
            }["useObservableSubscriptionResult.useSyncExternalStore.useCallback.onError"];
            // TODO evaluate if we keep this in
            // React Compiler cannot handle scoped `let` access, but a mutable object
            // like this is fine.
            // was:
            // let subscription = observable.subscribe(onNext, onError);
            var subscription = {
                current: observable.subscribe(onNext, onError)
            };
            // Do the "unsubscribe" with a short delay.
            // This way, an existing subscription can be reused without an additional
            // request if "unsubscribe"  and "resubscribe" to the same ObservableQuery
            // happen in very fast succession.
            return ({
                "useObservableSubscriptionResult.useSyncExternalStore.useCallback": function() {
                    setTimeout({
                        "useObservableSubscriptionResult.useSyncExternalStore.useCallback": function() {
                            return subscription.current.unsubscribe();
                        }
                    }["useObservableSubscriptionResult.useSyncExternalStore.useCallback"]);
                }
            })["useObservableSubscriptionResult.useSyncExternalStore.useCallback"];
        }
    }["useObservableSubscriptionResult.useSyncExternalStore.useCallback"], [
        disableNetworkFetches,
        isSyncSSR,
        observable,
        resultData,
        partialRefetch,
        client
    ]), {
        "useObservableSubscriptionResult.useSyncExternalStore": function() {
            return currentResultOverride || getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
        }
    }["useObservableSubscriptionResult.useSyncExternalStore"], {
        "useObservableSubscriptionResult.useSyncExternalStore": function() {
            return currentResultOverride || getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
        }
    }["useObservableSubscriptionResult.useSyncExternalStore"]);
}
function useRegisterSSRObservable(observable, renderPromises, ssrAllowed) {
    if (renderPromises && ssrAllowed) {
        renderPromises.registerSSRObservable(observable);
        if (observable.getCurrentResult().loading) {
            // TODO: This is a legacy API which could probably be cleaned up
            renderPromises.addObservableQueryPromise(observable);
        }
    }
}
// this hook is not compatible with any rules of React, and there's no good way to rewrite it.
// it should stay a separate hook that will not be optimized by the compiler
function useResubscribeIfNecessary(/** this hook will mutate properties on `resultData` */ resultData, /** this hook will mutate properties on `observable` */ observable, client, options, watchQueryOptions) {
    var _a;
    if (observable[lastWatchOptions] && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(observable[lastWatchOptions], watchQueryOptions)) {
        // Though it might be tempting to postpone this reobserve call to the
        // useEffect block, we need getCurrentResult to return an appropriate
        // loading:true result synchronously (later within the same call to
        // useQuery). Since we already have this.observable here (not true for
        // the very first call to useQuery), we are not initiating any new
        // subscriptions, though it does feel less than ideal that reobserve
        // (potentially) kicks off a network request (for example, when the
        // variables have changed), which is technically a side-effect.
        observable.reobserve(getObsQueryOptions(observable, client, options, watchQueryOptions));
        // Make sure getCurrentResult returns a fresh ApolloQueryResult<TData>,
        // but save the current data as this.previousData, just like setResult
        // usually does.
        resultData.previousData = ((_a = resultData.current) === null || _a === void 0 ? void 0 : _a.data) || resultData.previousData;
        resultData.current = void 0;
    }
    observable[lastWatchOptions] = watchQueryOptions;
}
function createMakeWatchQueryOptions(client, query, _a, isSyncSSR) {
    if (_a === void 0) {
        _a = {};
    }
    var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, defaultOptions = _a.defaultOptions, // The above options are useQuery-specific, so this ...otherOptions spread
    // makes otherOptions almost a WatchQueryOptions object, except for the
    // query property that we add below.
    otherOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "skip",
        "ssr",
        "onCompleted",
        "onError",
        "defaultOptions"
    ]);
    return function(observable) {
        // This Object.assign is safe because otherOptions is a fresh ...rest object
        // that did not exist until just now, so modifications are still allowed.
        var watchQueryOptions = Object.assign(otherOptions, {
            query: query
        });
        if (isSyncSSR && (watchQueryOptions.fetchPolicy === "network-only" || watchQueryOptions.fetchPolicy === "cache-and-network")) {
            // this behavior was added to react-apollo without explanation in this PR
            // https://github.com/apollographql/react-apollo/pull/1579
            watchQueryOptions.fetchPolicy = "cache-first";
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        if (skip) {
            // When skipping, we set watchQueryOptions.fetchPolicy initially to
            // "standby", but we also need/want to preserve the initial non-standby
            // fetchPolicy that would have been used if not skipping.
            watchQueryOptions.initialFetchPolicy = watchQueryOptions.initialFetchPolicy || watchQueryOptions.fetchPolicy || getDefaultFetchPolicy(defaultOptions, client.defaultOptions);
            watchQueryOptions.fetchPolicy = "standby";
        } else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy = (observable === null || observable === void 0 ? void 0 : observable.options.initialFetchPolicy) || getDefaultFetchPolicy(defaultOptions, client.defaultOptions);
        }
        return watchQueryOptions;
    };
}
function getObsQueryOptions(observable, client, queryHookOptions, watchQueryOptions) {
    var toMerge = [];
    var globalDefaults = client.defaultOptions.watchQuery;
    if (globalDefaults) toMerge.push(globalDefaults);
    if (queryHookOptions.defaultOptions) {
        toMerge.push(queryHookOptions.defaultOptions);
    }
    // We use compact rather than mergeOptions for this part of the merge,
    // because we want watchQueryOptions.variables (if defined) to replace
    // this.observable.options.variables whole. This replacement allows
    // removing variables by removing them from the variables input to
    // useQuery. If the variables were always merged together (rather than
    // replaced), there would be no way to remove existing variables.
    // However, the variables from options.defaultOptions and globalDefaults
    // (if provided) should be merged, to ensure individual defaulted
    // variables always have values, if not otherwise defined in
    // observable.options or watchQueryOptions.
    toMerge.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compact"])(observable && observable.options, watchQueryOptions));
    return toMerge.reduce(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeOptions"]);
}
function setResult(nextResult, resultData, observable, client, partialRefetch, forceUpdate, callbacks) {
    var previousResult = resultData.current;
    if (previousResult && previousResult.data) {
        resultData.previousData = previousResult.data;
    }
    if (!nextResult.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(nextResult.errors)) {
        // Until a set naming convention for networkError and graphQLErrors is
        // decided upon, we map errors (graphQLErrors) to the error options.
        // TODO: Is it possible for both result.error and result.errors to be
        // defined here?
        nextResult.error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloError"]({
            graphQLErrors: nextResult.errors
        });
    }
    resultData.current = toQueryResult(unsafeHandlePartialRefetch(nextResult, observable, partialRefetch), resultData.previousData, observable, client);
    // Calling state.setResult always triggers an update, though some call sites
    // perform additional equality checks before committing to an update.
    forceUpdate();
    handleErrorOrCompleted(nextResult, previousResult === null || previousResult === void 0 ? void 0 : previousResult.networkStatus, callbacks);
}
function handleErrorOrCompleted(result, previousNetworkStatus, callbacks) {
    if (!result.loading) {
        var error_1 = toApolloError(result);
        // wait a tick in case we are in the middle of rendering a component
        Promise.resolve().then(function() {
            if (error_1) {
                callbacks.onError(error_1);
            } else if (result.data && previousNetworkStatus !== result.networkStatus && result.networkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].ready) {
                callbacks.onCompleted(result.data);
            }
        }).catch(function(error) {
            globalThis.__DEV__ !== false && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$globals$2f$invariantWrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(error);
        });
    }
}
function getCurrentResult(resultData, observable, callbacks, partialRefetch, client) {
    // Using this.result as a cache ensures getCurrentResult continues returning
    // the same (===) result object, unless state.setResult has been called, or
    // we're doing server rendering and therefore override the result below.
    if (!resultData.current) {
        // WARNING: SIDE-EFFECTS IN THE RENDER FUNCTION
        // this could call unsafeHandlePartialRefetch
        setResult(observable.getCurrentResult(), resultData, observable, client, partialRefetch, function() {}, callbacks);
    }
    return resultData.current;
}
function getDefaultFetchPolicy(queryHookDefaultOptions, clientDefaultOptions) {
    var _a;
    return (queryHookDefaultOptions === null || queryHookDefaultOptions === void 0 ? void 0 : queryHookDefaultOptions.fetchPolicy) || ((_a = clientDefaultOptions === null || clientDefaultOptions === void 0 ? void 0 : clientDefaultOptions.watchQuery) === null || _a === void 0 ? void 0 : _a.fetchPolicy) || "cache-first";
}
function toApolloError(result) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(result.errors) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloError"]({
        graphQLErrors: result.errors
    }) : result.error;
}
function toQueryResult(result, previousData, observable, client) {
    var data = result.data, partial = result.partial, resultWithoutPartial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(result, [
        "data",
        "partial"
    ]);
    var queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        data: data
    }, resultWithoutPartial), {
        client: client,
        observable: observable,
        variables: observable.variables,
        called: result !== ssrDisabledResult && result !== skipStandbyResult,
        previousData: previousData
    });
    return queryResult;
}
function unsafeHandlePartialRefetch(result, observable, partialRefetch) {
    // TODO: This code should be removed when the partialRefetch option is
    // removed. I was unable to get this hook to behave reasonably in certain
    // edge cases when this block was put in an effect.
    if (result.partial && partialRefetch && !result.loading && (!result.data || Object.keys(result.data).length === 0) && observable.options.fetchPolicy !== "cache-only") {
        observable.refetch();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, result), {
            loading: true,
            networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].refetch
        });
    }
    return result;
}
var ssrDisabledResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])({
    loading: true,
    data: void 0,
    error: void 0,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].loading
});
var skipStandbyResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$common$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])({
    loading: false,
    data: void 0,
    error: void 0,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$13$2e$9_$40$types$2b$react$40$19$2e$1$2e$9_graphql$2d$ws$40$6$2e$0$2e$6_graphql$40$16$2e$11$2e$0_ws$40$8$2e$18$2e$3_$5f$g_e81559768e85d9970267d55946937340$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].ready
});
function bindObservableMethods(observable) {
    return {
        refetch: observable.refetch.bind(observable),
        reobserve: observable.reobserve.bind(observable),
        fetchMore: observable.fetchMore.bind(observable),
        updateQuery: observable.updateQuery.bind(observable),
        startPolling: observable.startPolling.bind(observable),
        stopPolling: observable.stopPolling.bind(observable),
        subscribeToMore: observable.subscribeToMore.bind(observable)
    };
} //# sourceMappingURL=useQuery.js.map
}),
"[project]/node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.11.0/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "disableExperimentalFragmentVariables": ()=>disableExperimentalFragmentVariables,
    "disableFragmentWarnings": ()=>disableFragmentWarnings,
    "enableExperimentalFragmentVariables": ()=>enableExperimentalFragmentVariables,
    "gql": ()=>gql,
    "resetCaches": ()=>resetCaches
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$11$2e$0$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/graphql@16.11.0/node_modules/graphql/language/parser.mjs [app-client] (ecmascript)");
;
;
var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n" + "graphql-tag enforces all fragment names across your application to be unique; read more about\n" + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            } else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else {
            definitions.push(fragmentDefinition);
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, ast), {
        definitions: definitions
    });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
        if (node.loc) delete node.loc;
        Object.keys(node).forEach(function(key) {
            var value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$11$2e$0$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++){
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === 'string') {
        literals = [
            literals
        ];
    }
    var result = literals[0];
    args.forEach(function(arg, i) {
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        } else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
const __TURBOPACK__default__export__ = gql;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/next@15.4.6_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.6_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_41e28ea3._.js.map
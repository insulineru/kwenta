"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerpsV2MarketViews__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_marketState",
                type: "address",
            },
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_resolver",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "destination",
                type: "address",
            },
        ],
        name: "CacheUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldOwner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerNominated",
        type: "event",
    },
    {
        constant: false,
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "accessibleMargin",
        outputs: [
            {
                internalType: "uint256",
                name: "marginAccessible",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "accruedFunding",
        outputs: [
            {
                internalType: "int256",
                name: "funding",
                type: "int256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "assetPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "baseAsset",
        outputs: [
            {
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "canLiquidate",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "currentFundingRate",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "currentFundingVelocity",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "int256",
                name: "sizeDelta",
                type: "int256",
            },
        ],
        name: "fillPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "fundingLastRecomputed",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "fundingSequence",
        outputs: [
            {
                internalType: "int128",
                name: "",
                type: "int128",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "fundingSequenceLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isResolverCached",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "liquidationFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "liquidationPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "marketDebt",
        outputs: [
            {
                internalType: "uint256",
                name: "debt",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "marketKey",
        outputs: [
            {
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "marketSize",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "marketSizes",
        outputs: [
            {
                internalType: "uint256",
                name: "long",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "short",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "marketSkew",
        outputs: [
            {
                internalType: "int128",
                name: "",
                type: "int128",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "marketState",
        outputs: [
            {
                internalType: "contract IPerpsV2MarketState",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "nominateNewOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "nominatedOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "notionalValue",
        outputs: [
            {
                internalType: "int256",
                name: "value",
                type: "int256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "int256",
                name: "sizeDelta",
                type: "int256",
            },
            {
                internalType: "enum IPerpsV2MarketBaseTypes.OrderType",
                name: "orderType",
                type: "uint8",
            },
        ],
        name: "orderFee",
        outputs: [
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "positions",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "id",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "lastFundingIndex",
                        type: "uint64",
                    },
                    {
                        internalType: "uint128",
                        name: "margin",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "lastPrice",
                        type: "uint128",
                    },
                    {
                        internalType: "int128",
                        name: "size",
                        type: "int128",
                    },
                ],
                internalType: "struct IPerpsV2MarketBaseTypes.Position",
                name: "",
                type: "tuple",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "int256",
                name: "sizeDelta",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "tradePrice",
                type: "uint256",
            },
            {
                internalType: "enum IPerpsV2MarketBaseTypes.OrderType",
                name: "orderType",
                type: "uint8",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "postTradeDetails",
        outputs: [
            {
                internalType: "uint256",
                name: "margin",
                type: "uint256",
            },
            {
                internalType: "int256",
                name: "size",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liqPrice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
            {
                internalType: "enum IPerpsV2MarketBaseTypes.Status",
                name: "status",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "profitLoss",
        outputs: [
            {
                internalType: "int256",
                name: "pnl",
                type: "int256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "rebuildCache",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "remainingMargin",
        outputs: [
            {
                internalType: "uint256",
                name: "marginRemaining",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "resolver",
        outputs: [
            {
                internalType: "contract AddressResolver",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "resolverAddressesRequired",
        outputs: [
            {
                internalType: "bytes32[]",
                name: "addresses",
                type: "bytes32[]",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "unrecordedFunding",
        outputs: [
            {
                internalType: "int256",
                name: "funding",
                type: "int256",
            },
            {
                internalType: "bool",
                name: "invalid",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
class PerpsV2MarketViews__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PerpsV2MarketViews__factory = PerpsV2MarketViews__factory;
PerpsV2MarketViews__factory.abi = _abi;

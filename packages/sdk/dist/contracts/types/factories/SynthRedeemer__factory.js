"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynthRedeemer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
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
                name: "synth",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "rateToRedeem",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalSynthSupply",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "supplyInsUSD",
                type: "uint256",
            },
        ],
        name: "SynthDeprecated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "synth",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountOfSynth",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountInsUSD",
                type: "uint256",
            },
        ],
        name: "SynthRedeemed",
        type: "event",
    },
    {
        constant: true,
        inputs: [],
        name: "CONTRACT_NAME",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
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
                internalType: "contract IERC20",
                name: "synthProxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "balanceInsUSD",
                type: "uint256",
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
                internalType: "contract IERC20",
                name: "synthProxy",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "rateToRedeem",
                type: "uint256",
            },
        ],
        name: "deprecate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
        constant: false,
        inputs: [],
        name: "rebuildCache",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract IERC20",
                name: "synthProxy",
                type: "address",
            },
        ],
        name: "redeem",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract IERC20[]",
                name: "synthProxies",
                type: "address[]",
            },
        ],
        name: "redeemAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract IERC20",
                name: "synthProxy",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountOfSynth",
                type: "uint256",
            },
        ],
        name: "redeemPartial",
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
                name: "",
                type: "address",
            },
        ],
        name: "redemptions",
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
        inputs: [
            {
                internalType: "contract IERC20",
                name: "synthProxy",
                type: "address",
            },
        ],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "supplyInsUSD",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
class SynthRedeemer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SynthRedeemer__factory = SynthRedeemer__factory;
SynthRedeemer__factory.abi = _abi;

import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface SynthRedeemerInterface extends utils.Interface {
    functions: {
        "CONTRACT_NAME()": FunctionFragment;
        "balanceOf(address,address)": FunctionFragment;
        "deprecate(address,uint256)": FunctionFragment;
        "isResolverCached()": FunctionFragment;
        "rebuildCache()": FunctionFragment;
        "redeem(address)": FunctionFragment;
        "redeemAll(address[])": FunctionFragment;
        "redeemPartial(address,uint256)": FunctionFragment;
        "redemptions(address)": FunctionFragment;
        "resolver()": FunctionFragment;
        "resolverAddressesRequired()": FunctionFragment;
        "totalSupply(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CONTRACT_NAME" | "balanceOf" | "deprecate" | "isResolverCached" | "rebuildCache" | "redeem" | "redeemAll" | "redeemPartial" | "redemptions" | "resolver" | "resolverAddressesRequired" | "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "CONTRACT_NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deprecate", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isResolverCached", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebuildCache", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "redeemAll", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "redeemPartial", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "redemptions", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "resolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolverAddressesRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "CONTRACT_NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deprecate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isResolverCached", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebuildCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemPartial", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redemptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolverAddressesRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    events: {
        "CacheUpdated(bytes32,address)": EventFragment;
        "SynthDeprecated(address,uint256,uint256,uint256)": EventFragment;
        "SynthRedeemed(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CacheUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SynthDeprecated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SynthRedeemed"): EventFragment;
}
export interface CacheUpdatedEventObject {
    name: string;
    destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[
    string,
    string
], CacheUpdatedEventObject>;
export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;
export interface SynthDeprecatedEventObject {
    synth: string;
    rateToRedeem: BigNumber;
    totalSynthSupply: BigNumber;
    supplyInsUSD: BigNumber;
}
export type SynthDeprecatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], SynthDeprecatedEventObject>;
export type SynthDeprecatedEventFilter = TypedEventFilter<SynthDeprecatedEvent>;
export interface SynthRedeemedEventObject {
    synth: string;
    account: string;
    amountOfSynth: BigNumber;
    amountInsUSD: BigNumber;
}
export type SynthRedeemedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], SynthRedeemedEventObject>;
export type SynthRedeemedEventFilter = TypedEventFilter<SynthRedeemedEvent>;
export interface SynthRedeemer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SynthRedeemerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        CONTRACT_NAME(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(synthProxy: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balanceInsUSD: BigNumber;
        }>;
        deprecate(synthProxy: PromiseOrValue<string>, rateToRedeem: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeem(synthProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemAll(synthProxies: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemPartial(synthProxy: PromiseOrValue<string>, amountOfSynth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redemptions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        resolver(overrides?: CallOverrides): Promise<[string]>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        totalSupply(synthProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            supplyInsUSD: BigNumber;
        }>;
    };
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;
    balanceOf(synthProxy: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    deprecate(synthProxy: PromiseOrValue<string>, rateToRedeem: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isResolverCached(overrides?: CallOverrides): Promise<boolean>;
    rebuildCache(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeem(synthProxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemAll(synthProxies: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemPartial(synthProxy: PromiseOrValue<string>, amountOfSynth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redemptions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    resolver(overrides?: CallOverrides): Promise<string>;
    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
    totalSupply(synthProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;
        balanceOf(synthProxy: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deprecate(synthProxy: PromiseOrValue<string>, rateToRedeem: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        isResolverCached(overrides?: CallOverrides): Promise<boolean>;
        rebuildCache(overrides?: CallOverrides): Promise<void>;
        redeem(synthProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        redeemAll(synthProxies: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        redeemPartial(synthProxy: PromiseOrValue<string>, amountOfSynth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        redemptions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        resolver(overrides?: CallOverrides): Promise<string>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
        totalSupply(synthProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CacheUpdated(bytes32,address)"(name?: null, destination?: null): CacheUpdatedEventFilter;
        CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;
        "SynthDeprecated(address,uint256,uint256,uint256)"(synth?: null, rateToRedeem?: null, totalSynthSupply?: null, supplyInsUSD?: null): SynthDeprecatedEventFilter;
        SynthDeprecated(synth?: null, rateToRedeem?: null, totalSynthSupply?: null, supplyInsUSD?: null): SynthDeprecatedEventFilter;
        "SynthRedeemed(address,address,uint256,uint256)"(synth?: null, account?: null, amountOfSynth?: null, amountInsUSD?: null): SynthRedeemedEventFilter;
        SynthRedeemed(synth?: null, account?: null, amountOfSynth?: null, amountInsUSD?: null): SynthRedeemedEventFilter;
    };
    estimateGas: {
        CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(synthProxy: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deprecate(synthProxy: PromiseOrValue<string>, rateToRedeem: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeem(synthProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemAll(synthProxies: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemPartial(synthProxy: PromiseOrValue<string>, amountOfSynth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redemptions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        resolver(overrides?: CallOverrides): Promise<BigNumber>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(synthProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(synthProxy: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deprecate(synthProxy: PromiseOrValue<string>, rateToRedeem: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeem(synthProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemAll(synthProxies: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemPartial(synthProxy: PromiseOrValue<string>, amountOfSynth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redemptions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(synthProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

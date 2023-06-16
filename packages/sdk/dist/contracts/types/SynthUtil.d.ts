import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface SynthUtilInterface extends utils.Interface {
    functions: {
        "addressResolverProxy()": FunctionFragment;
        "synthsBalances(address)": FunctionFragment;
        "synthsRates()": FunctionFragment;
        "synthsTotalSupplies()": FunctionFragment;
        "totalSynthsInKey(address,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addressResolverProxy" | "synthsBalances" | "synthsRates" | "synthsTotalSupplies" | "totalSynthsInKey"): FunctionFragment;
    encodeFunctionData(functionFragment: "addressResolverProxy", values?: undefined): string;
    encodeFunctionData(functionFragment: "synthsBalances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "synthsRates", values?: undefined): string;
    encodeFunctionData(functionFragment: "synthsTotalSupplies", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSynthsInKey", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "addressResolverProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "synthsBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "synthsRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "synthsTotalSupplies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSynthsInKey", data: BytesLike): Result;
    events: {};
}
export interface SynthUtil extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SynthUtilInterface;
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
        addressResolverProxy(overrides?: CallOverrides): Promise<[string]>;
        synthsBalances(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[], BigNumber[]]>;
        synthsRates(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        synthsTotalSupplies(overrides?: CallOverrides): Promise<[string[], BigNumber[], BigNumber[]]>;
        totalSynthsInKey(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            total: BigNumber;
        }>;
    };
    addressResolverProxy(overrides?: CallOverrides): Promise<string>;
    synthsBalances(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[], BigNumber[]]>;
    synthsRates(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
    synthsTotalSupplies(overrides?: CallOverrides): Promise<[string[], BigNumber[], BigNumber[]]>;
    totalSynthsInKey(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addressResolverProxy(overrides?: CallOverrides): Promise<string>;
        synthsBalances(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[], BigNumber[]]>;
        synthsRates(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        synthsTotalSupplies(overrides?: CallOverrides): Promise<[string[], BigNumber[], BigNumber[]]>;
        totalSynthsInKey(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        addressResolverProxy(overrides?: CallOverrides): Promise<BigNumber>;
        synthsBalances(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        synthsRates(overrides?: CallOverrides): Promise<BigNumber>;
        synthsTotalSupplies(overrides?: CallOverrides): Promise<BigNumber>;
        totalSynthsInKey(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addressResolverProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        synthsBalances(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        synthsRates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        synthsTotalSupplies(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSynthsInKey(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

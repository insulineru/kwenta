import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface VeKwentaRedeemerInterface extends utils.Interface {
    functions: {
        "kwenta()": FunctionFragment;
        "redeem(address)": FunctionFragment;
        "rewardEscrow()": FunctionFragment;
        "veKwenta()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "kwenta" | "redeem" | "rewardEscrow" | "veKwenta"): FunctionFragment;
    encodeFunctionData(functionFragment: "kwenta", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "veKwenta", values?: undefined): string;
    decodeFunctionResult(functionFragment: "kwenta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veKwenta", data: BytesLike): Result;
    events: {
        "Redeemed(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
}
export interface RedeemedEventObject {
    redeemer: string;
    beneficiary: string;
    redeemedAmount: BigNumber;
}
export type RedeemedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RedeemedEventObject>;
export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;
export interface VeKwentaRedeemer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VeKwentaRedeemerInterface;
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
        kwenta(overrides?: CallOverrides): Promise<[string]>;
        redeem(_beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rewardEscrow(overrides?: CallOverrides): Promise<[string]>;
        veKwenta(overrides?: CallOverrides): Promise<[string]>;
    };
    kwenta(overrides?: CallOverrides): Promise<string>;
    redeem(_beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rewardEscrow(overrides?: CallOverrides): Promise<string>;
    veKwenta(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        kwenta(overrides?: CallOverrides): Promise<string>;
        redeem(_beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        rewardEscrow(overrides?: CallOverrides): Promise<string>;
        veKwenta(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Redeemed(address,address,uint256)"(redeemer?: PromiseOrValue<string> | null, beneficiary?: PromiseOrValue<string> | null, redeemedAmount?: null): RedeemedEventFilter;
        Redeemed(redeemer?: PromiseOrValue<string> | null, beneficiary?: PromiseOrValue<string> | null, redeemedAmount?: null): RedeemedEventFilter;
    };
    estimateGas: {
        kwenta(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(_beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rewardEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        veKwenta(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        kwenta(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(_beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rewardEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veKwenta(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

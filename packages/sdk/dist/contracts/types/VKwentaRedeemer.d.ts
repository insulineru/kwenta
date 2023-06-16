import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface VKwentaRedeemerInterface extends utils.Interface {
    functions: {
        "redeem()": FunctionFragment;
        "token()": FunctionFragment;
        "vToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "redeem" | "token" | "vToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "redeem", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "vToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vToken", data: BytesLike): Result;
    events: {
        "Redeemed(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
}
export interface RedeemedEventObject {
    redeemer: string;
    redeemedAmount: BigNumber;
}
export type RedeemedEvent = TypedEvent<[
    string,
    BigNumber
], RedeemedEventObject>;
export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;
export interface VKwentaRedeemer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VKwentaRedeemerInterface;
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
        redeem(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        vToken(overrides?: CallOverrides): Promise<[string]>;
    };
    redeem(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    vToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        redeem(overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        vToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Redeemed(address,uint256)"(redeemer?: null, redeemedAmount?: null): RedeemedEventFilter;
        Redeemed(redeemer?: null, redeemedAmount?: null): RedeemedEventFilter;
    };
    estimateGas: {
        redeem(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        vToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        redeem(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

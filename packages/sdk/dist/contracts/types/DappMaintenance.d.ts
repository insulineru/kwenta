import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DappMaintenanceInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "isPausedSX()": FunctionFragment;
        "isPausedStaking()": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "setMaintenanceModeAll(bool)": FunctionFragment;
        "setMaintenanceModeSX(bool)": FunctionFragment;
        "setMaintenanceModeStaking(bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "isPausedSX" | "isPausedStaking" | "nominateNewOwner" | "nominatedOwner" | "owner" | "setMaintenanceModeAll" | "setMaintenanceModeSX" | "setMaintenanceModeStaking"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPausedSX", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPausedStaking", values?: undefined): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMaintenanceModeAll", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMaintenanceModeSX", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMaintenanceModeStaking", values: [PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPausedSX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPausedStaking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaintenanceModeAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaintenanceModeSX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaintenanceModeStaking", data: BytesLike): Result;
    events: {
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "SXMaintenance(bool)": EventFragment;
        "StakingMaintenance(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SXMaintenance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingMaintenance"): EventFragment;
}
export interface OwnerChangedEventObject {
    oldOwner: string;
    newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[
    string,
    string
], OwnerChangedEventObject>;
export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;
export interface OwnerNominatedEventObject {
    newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[
    string
], OwnerNominatedEventObject>;
export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;
export interface SXMaintenanceEventObject {
    isPaused: boolean;
}
export type SXMaintenanceEvent = TypedEvent<[
    boolean
], SXMaintenanceEventObject>;
export type SXMaintenanceEventFilter = TypedEventFilter<SXMaintenanceEvent>;
export interface StakingMaintenanceEventObject {
    isPaused: boolean;
}
export type StakingMaintenanceEvent = TypedEvent<[
    boolean
], StakingMaintenanceEventObject>;
export type StakingMaintenanceEventFilter = TypedEventFilter<StakingMaintenanceEvent>;
export interface DappMaintenance extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DappMaintenanceInterface;
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
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPausedSX(overrides?: CallOverrides): Promise<[boolean]>;
        isPausedStaking(overrides?: CallOverrides): Promise<[boolean]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setMaintenanceModeAll(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaintenanceModeSX(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaintenanceModeStaking(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPausedSX(overrides?: CallOverrides): Promise<boolean>;
    isPausedStaking(overrides?: CallOverrides): Promise<boolean>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    setMaintenanceModeAll(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaintenanceModeSX(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaintenanceModeStaking(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        isPausedSX(overrides?: CallOverrides): Promise<boolean>;
        isPausedStaking(overrides?: CallOverrides): Promise<boolean>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        setMaintenanceModeAll(isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMaintenanceModeSX(isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMaintenanceModeStaking(isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "SXMaintenance(bool)"(isPaused?: null): SXMaintenanceEventFilter;
        SXMaintenance(isPaused?: null): SXMaintenanceEventFilter;
        "StakingMaintenance(bool)"(isPaused?: null): StakingMaintenanceEventFilter;
        StakingMaintenance(isPaused?: null): StakingMaintenanceEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPausedSX(overrides?: CallOverrides): Promise<BigNumber>;
        isPausedStaking(overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setMaintenanceModeAll(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaintenanceModeSX(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaintenanceModeStaking(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPausedSX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPausedStaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMaintenanceModeAll(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaintenanceModeSX(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaintenanceModeStaking(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

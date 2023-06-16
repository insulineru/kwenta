import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace VestingEntries {
    type VestingEntryWithIDStruct = {
        endTime: PromiseOrValue<BigNumberish>;
        escrowAmount: PromiseOrValue<BigNumberish>;
        entryID: PromiseOrValue<BigNumberish>;
    };
    type VestingEntryWithIDStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        endTime: BigNumber;
        escrowAmount: BigNumber;
        entryID: BigNumber;
    };
}
export interface RewardEscrowInterface extends utils.Interface {
    functions: {
        "MAX_DURATION()": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "accountVestingEntryIDs(address,uint256)": FunctionFragment;
        "appendVestingEntry(address,uint256,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "createEscrowEntry(address,uint256,uint256)": FunctionFragment;
        "getAccountVestingEntryIDs(address,uint256,uint256)": FunctionFragment;
        "getKwentaAddress()": FunctionFragment;
        "getVestingEntry(address,uint256)": FunctionFragment;
        "getVestingEntryClaimable(address,uint256)": FunctionFragment;
        "getVestingQuantity(address,uint256[])": FunctionFragment;
        "getVestingSchedules(address,uint256,uint256)": FunctionFragment;
        "nextEntryId()": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "numVestingEntries(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "setStakingRewards(address)": FunctionFragment;
        "setTreasuryDAO(address)": FunctionFragment;
        "stakeEscrow(uint256)": FunctionFragment;
        "stakingRewards()": FunctionFragment;
        "totalEscrowedAccountBalance(address)": FunctionFragment;
        "totalEscrowedBalance()": FunctionFragment;
        "totalVestedAccountBalance(address)": FunctionFragment;
        "treasuryDAO()": FunctionFragment;
        "unstakeEscrow(uint256)": FunctionFragment;
        "vest(uint256[])": FunctionFragment;
        "vestingSchedules(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_DURATION" | "acceptOwnership" | "accountVestingEntryIDs" | "appendVestingEntry" | "balanceOf" | "createEscrowEntry" | "getAccountVestingEntryIDs" | "getKwentaAddress" | "getVestingEntry" | "getVestingEntryClaimable" | "getVestingQuantity" | "getVestingSchedules" | "nextEntryId" | "nominateNewOwner" | "nominatedOwner" | "numVestingEntries" | "owner" | "setStakingRewards" | "setTreasuryDAO" | "stakeEscrow" | "stakingRewards" | "totalEscrowedAccountBalance" | "totalEscrowedBalance" | "totalVestedAccountBalance" | "treasuryDAO" | "unstakeEscrow" | "vest" | "vestingSchedules"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountVestingEntryIDs", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "appendVestingEntry", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createEscrowEntry", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAccountVestingEntryIDs", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getKwentaAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVestingEntry", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVestingEntryClaimable", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVestingQuantity", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getVestingSchedules", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "nextEntryId", values?: undefined): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "numVestingEntries", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setStakingRewards", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTreasuryDAO", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stakeEscrow", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stakingRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalEscrowedAccountBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalEscrowedBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalVestedAccountBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "treasuryDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "unstakeEscrow", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "vest", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "vestingSchedules", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "MAX_DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountVestingEntryIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appendVestingEntry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createEscrowEntry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountVestingEntryIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKwentaAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVestingEntry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVestingEntryClaimable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVestingQuantity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVestingSchedules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextEntryId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numVestingEntries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasuryDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalEscrowedAccountBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalEscrowedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalVestedAccountBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vestingSchedules", data: BytesLike): Result;
    events: {
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "StakingRewardsSet(address)": EventFragment;
        "TreasuryDAOSet(address)": EventFragment;
        "Vested(address,uint256)": EventFragment;
        "VestingEntryCreated(address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingRewardsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasuryDAOSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Vested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VestingEntryCreated"): EventFragment;
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
export interface StakingRewardsSetEventObject {
    rewardEscrow: string;
}
export type StakingRewardsSetEvent = TypedEvent<[
    string
], StakingRewardsSetEventObject>;
export type StakingRewardsSetEventFilter = TypedEventFilter<StakingRewardsSetEvent>;
export interface TreasuryDAOSetEventObject {
    treasuryDAO: string;
}
export type TreasuryDAOSetEvent = TypedEvent<[
    string
], TreasuryDAOSetEventObject>;
export type TreasuryDAOSetEventFilter = TypedEventFilter<TreasuryDAOSetEvent>;
export interface VestedEventObject {
    beneficiary: string;
    value: BigNumber;
}
export type VestedEvent = TypedEvent<[string, BigNumber], VestedEventObject>;
export type VestedEventFilter = TypedEventFilter<VestedEvent>;
export interface VestingEntryCreatedEventObject {
    beneficiary: string;
    value: BigNumber;
    duration: BigNumber;
    entryID: BigNumber;
}
export type VestingEntryCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], VestingEntryCreatedEventObject>;
export type VestingEntryCreatedEventFilter = TypedEventFilter<VestingEntryCreatedEvent>;
export interface RewardEscrow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardEscrowInterface;
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
        MAX_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        accountVestingEntryIDs(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        appendVestingEntry(account: PromiseOrValue<string>, quantity: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        createEscrowEntry(beneficiary: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountVestingEntryIDs(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getKwentaAddress(overrides?: CallOverrides): Promise<[string]>;
        getVestingEntry(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            endTime: BigNumber;
            escrowAmount: BigNumber;
            duration: BigNumber;
        }>;
        getVestingEntryClaimable(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quantity: BigNumber;
            fee: BigNumber;
        }>;
        getVestingQuantity(account: PromiseOrValue<string>, entryIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            total: BigNumber;
            totalFee: BigNumber;
        }>;
        getVestingSchedules(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[VestingEntries.VestingEntryWithIDStructOutput[]]>;
        nextEntryId(overrides?: CallOverrides): Promise<[BigNumber]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        numVestingEntries(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setStakingRewards(_stakingRewards: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTreasuryDAO(_treasuryDAO: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stakingRewards(overrides?: CallOverrides): Promise<[string]>;
        totalEscrowedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalEscrowedBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalVestedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        treasuryDAO(overrides?: CallOverrides): Promise<[string]>;
        unstakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vest(entryIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vestingSchedules(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            endTime: BigNumber;
            escrowAmount: BigNumber;
            duration: BigNumber;
        }>;
    };
    MAX_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    accountVestingEntryIDs(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    appendVestingEntry(account: PromiseOrValue<string>, quantity: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    createEscrowEntry(beneficiary: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountVestingEntryIDs(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getKwentaAddress(overrides?: CallOverrides): Promise<string>;
    getVestingEntry(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        endTime: BigNumber;
        escrowAmount: BigNumber;
        duration: BigNumber;
    }>;
    getVestingEntryClaimable(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        quantity: BigNumber;
        fee: BigNumber;
    }>;
    getVestingQuantity(account: PromiseOrValue<string>, entryIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        total: BigNumber;
        totalFee: BigNumber;
    }>;
    getVestingSchedules(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<VestingEntries.VestingEntryWithIDStructOutput[]>;
    nextEntryId(overrides?: CallOverrides): Promise<BigNumber>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    numVestingEntries(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    setStakingRewards(_stakingRewards: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTreasuryDAO(_treasuryDAO: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stakingRewards(overrides?: CallOverrides): Promise<string>;
    totalEscrowedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    totalEscrowedBalance(overrides?: CallOverrides): Promise<BigNumber>;
    totalVestedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    treasuryDAO(overrides?: CallOverrides): Promise<string>;
    unstakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vest(entryIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vestingSchedules(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        endTime: BigNumber;
        escrowAmount: BigNumber;
        duration: BigNumber;
    }>;
    callStatic: {
        MAX_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        accountVestingEntryIDs(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        appendVestingEntry(account: PromiseOrValue<string>, quantity: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createEscrowEntry(beneficiary: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAccountVestingEntryIDs(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getKwentaAddress(overrides?: CallOverrides): Promise<string>;
        getVestingEntry(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            endTime: BigNumber;
            escrowAmount: BigNumber;
            duration: BigNumber;
        }>;
        getVestingEntryClaimable(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quantity: BigNumber;
            fee: BigNumber;
        }>;
        getVestingQuantity(account: PromiseOrValue<string>, entryIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            total: BigNumber;
            totalFee: BigNumber;
        }>;
        getVestingSchedules(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<VestingEntries.VestingEntryWithIDStructOutput[]>;
        nextEntryId(overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        numVestingEntries(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        setStakingRewards(_stakingRewards: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTreasuryDAO(_treasuryDAO: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stakingRewards(overrides?: CallOverrides): Promise<string>;
        totalEscrowedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalEscrowedBalance(overrides?: CallOverrides): Promise<BigNumber>;
        totalVestedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        treasuryDAO(overrides?: CallOverrides): Promise<string>;
        unstakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        vest(entryIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        vestingSchedules(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            endTime: BigNumber;
            escrowAmount: BigNumber;
            duration: BigNumber;
        }>;
    };
    filters: {
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "StakingRewardsSet(address)"(rewardEscrow?: null): StakingRewardsSetEventFilter;
        StakingRewardsSet(rewardEscrow?: null): StakingRewardsSetEventFilter;
        "TreasuryDAOSet(address)"(treasuryDAO?: null): TreasuryDAOSetEventFilter;
        TreasuryDAOSet(treasuryDAO?: null): TreasuryDAOSetEventFilter;
        "Vested(address,uint256)"(beneficiary?: PromiseOrValue<string> | null, value?: null): VestedEventFilter;
        Vested(beneficiary?: PromiseOrValue<string> | null, value?: null): VestedEventFilter;
        "VestingEntryCreated(address,uint256,uint256,uint256)"(beneficiary?: PromiseOrValue<string> | null, value?: null, duration?: null, entryID?: null): VestingEntryCreatedEventFilter;
        VestingEntryCreated(beneficiary?: PromiseOrValue<string> | null, value?: null, duration?: null, entryID?: null): VestingEntryCreatedEventFilter;
    };
    estimateGas: {
        MAX_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        accountVestingEntryIDs(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        appendVestingEntry(account: PromiseOrValue<string>, quantity: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createEscrowEntry(beneficiary: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountVestingEntryIDs(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getKwentaAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getVestingEntry(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVestingEntryClaimable(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVestingQuantity(account: PromiseOrValue<string>, entryIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getVestingSchedules(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nextEntryId(overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        numVestingEntries(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setStakingRewards(_stakingRewards: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTreasuryDAO(_treasuryDAO: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stakingRewards(overrides?: CallOverrides): Promise<BigNumber>;
        totalEscrowedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalEscrowedBalance(overrides?: CallOverrides): Promise<BigNumber>;
        totalVestedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        treasuryDAO(overrides?: CallOverrides): Promise<BigNumber>;
        unstakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vest(entryIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vestingSchedules(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        accountVestingEntryIDs(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        appendVestingEntry(account: PromiseOrValue<string>, quantity: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createEscrowEntry(beneficiary: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountVestingEntryIDs(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKwentaAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVestingEntry(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVestingEntryClaimable(account: PromiseOrValue<string>, entryID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVestingQuantity(account: PromiseOrValue<string>, entryIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVestingSchedules(account: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextEntryId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numVestingEntries(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setStakingRewards(_stakingRewards: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTreasuryDAO(_treasuryDAO: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stakingRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalEscrowedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalEscrowedBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalVestedAccountBalance(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasuryDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unstakeEscrow(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vest(entryIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vestingSchedules(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

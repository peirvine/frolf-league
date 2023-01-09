import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Rounds?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Rounds?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Players = LazyLoading extends LazyLoadingDisabled ? EagerPlayers : LazyPlayers

export declare const Players: (new (init: ModelInit<Players>) => Players) & {
  copyOf(source: Players, mutator: (draft: MutableModel<Players>) => MutableModel<Players> | void): Players;
}

type EagerScorecards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Scorecards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Course?: string | null;
  readonly Layout?: string | null;
  readonly Player?: (string | null)[] | null;
  readonly Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScorecards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Scorecards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Course?: string | null;
  readonly Layout?: string | null;
  readonly Player?: (string | null)[] | null;
  readonly Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Scorecards = LazyLoading extends LazyLoadingDisabled ? EagerScorecards : LazyScorecards

export declare const Scorecards: (new (init: ModelInit<Scorecards>) => Scorecards) & {
  copyOf(source: Scorecards, mutator: (draft: MutableModel<Scorecards>) => MutableModel<Scorecards> | void): Scorecards;
}

type EagerCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CourseName?: string | null;
  readonly Layouts?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CourseName?: string | null;
  readonly Layouts?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Courses = LazyLoading extends LazyLoadingDisabled ? EagerCourses : LazyCourses

export declare const Courses: (new (init: ModelInit<Courses>) => Courses) & {
  copyOf(source: Courses, mutator: (draft: MutableModel<Courses>) => MutableModel<Courses> | void): Courses;
}
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Scorecards } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScorecardsUpdateFormInputValues = {
    Course?: string;
    Layout?: string;
    Player?: string[];
    Date?: string;
};
export declare type ScorecardsUpdateFormValidationValues = {
    Course?: ValidationFunction<string>;
    Layout?: ValidationFunction<string>;
    Player?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScorecardsUpdateFormOverridesProps = {
    ScorecardsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Course?: PrimitiveOverrideProps<TextFieldProps>;
    Layout?: PrimitiveOverrideProps<TextFieldProps>;
    Player?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScorecardsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScorecardsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scorecards?: Scorecards;
    onSubmit?: (fields: ScorecardsUpdateFormInputValues) => ScorecardsUpdateFormInputValues;
    onSuccess?: (fields: ScorecardsUpdateFormInputValues) => void;
    onError?: (fields: ScorecardsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScorecardsUpdateFormInputValues) => ScorecardsUpdateFormInputValues;
    onValidate?: ScorecardsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScorecardsUpdateForm(props: ScorecardsUpdateFormProps): React.ReactElement;

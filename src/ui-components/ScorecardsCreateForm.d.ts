/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScorecardsCreateFormInputValues = {
    Course?: string;
    Layout?: string;
    Player?: string[];
    Date?: string;
};
export declare type ScorecardsCreateFormValidationValues = {
    Course?: ValidationFunction<string>;
    Layout?: ValidationFunction<string>;
    Player?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScorecardsCreateFormOverridesProps = {
    ScorecardsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Course?: PrimitiveOverrideProps<TextFieldProps>;
    Layout?: PrimitiveOverrideProps<TextFieldProps>;
    Player?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScorecardsCreateFormProps = React.PropsWithChildren<{
    overrides?: ScorecardsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScorecardsCreateFormInputValues) => ScorecardsCreateFormInputValues;
    onSuccess?: (fields: ScorecardsCreateFormInputValues) => void;
    onError?: (fields: ScorecardsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScorecardsCreateFormInputValues) => ScorecardsCreateFormInputValues;
    onValidate?: ScorecardsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScorecardsCreateForm(props: ScorecardsCreateFormProps): React.ReactElement;

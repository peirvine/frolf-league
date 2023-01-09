/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoursesCreateFormInputValues = {
    CourseName?: string;
    Layouts?: string[];
};
export declare type CoursesCreateFormValidationValues = {
    CourseName?: ValidationFunction<string>;
    Layouts?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoursesCreateFormOverridesProps = {
    CoursesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CourseName?: PrimitiveOverrideProps<TextFieldProps>;
    Layouts?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoursesCreateFormProps = React.PropsWithChildren<{
    overrides?: CoursesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CoursesCreateFormInputValues) => CoursesCreateFormInputValues;
    onSuccess?: (fields: CoursesCreateFormInputValues) => void;
    onError?: (fields: CoursesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoursesCreateFormInputValues) => CoursesCreateFormInputValues;
    onValidate?: CoursesCreateFormValidationValues;
} & React.CSSProperties>;
export default function CoursesCreateForm(props: CoursesCreateFormProps): React.ReactElement;

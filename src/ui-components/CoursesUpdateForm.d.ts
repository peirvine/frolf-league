/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Courses } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoursesUpdateFormInputValues = {
    CourseName?: string;
    Layouts?: string[];
};
export declare type CoursesUpdateFormValidationValues = {
    CourseName?: ValidationFunction<string>;
    Layouts?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoursesUpdateFormOverridesProps = {
    CoursesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CourseName?: PrimitiveOverrideProps<TextFieldProps>;
    Layouts?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoursesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CoursesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courses?: Courses;
    onSubmit?: (fields: CoursesUpdateFormInputValues) => CoursesUpdateFormInputValues;
    onSuccess?: (fields: CoursesUpdateFormInputValues) => void;
    onError?: (fields: CoursesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoursesUpdateFormInputValues) => CoursesUpdateFormInputValues;
    onValidate?: CoursesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CoursesUpdateForm(props: CoursesUpdateFormProps): React.ReactElement;

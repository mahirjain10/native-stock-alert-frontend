import { signUpType } from "@/types/auth";

export const validateRegisterForm = (form:signUpType) => {
    const errors: { name: string | null; email: string | null; password: string | null } = {
        name: null,
        email: null,
        password: null,
    };

    // Name validation
    if (form.name.length === 0) {
        errors.name = "Name is required";
    } else if (form.name.length < 3) {
        errors.name = "Name must be at least 3 characters long";
    } else if (form.name.length > 20) {
        errors.name = "Name must be less than 20 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email.length === 0) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
        errors.email = "Invalid email";
    }

    // Password validation
    if (form.password.length === 0) {
        errors.password = "Password is required";
    } else if (form.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } else if (form.password.length > 20) {
        errors.password = "Password must be less than 20 characters long";
    }

    return errors;
};
export const validateLoginForm = (form: { email: string; password: string }) => {
    const errors: {  email: string | null; password: string | null } = {
        email: null,
        password: null,
    };


    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email.length === 0) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
        errors.email = "Invalid email";
    }

    // Password validation
    if (form.password.length === 0) {
        errors.password = "Password is required";
    } else if (form.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } else if (form.password.length > 20) {
        errors.password = "Password must be less than 20 characters long";
    }

    return errors;
};
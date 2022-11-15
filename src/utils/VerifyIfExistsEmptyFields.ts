export const verifyIfExistsEmptyFields = (values: string[]) => {

    return values.some((value) => value.trim().length === 0)
}
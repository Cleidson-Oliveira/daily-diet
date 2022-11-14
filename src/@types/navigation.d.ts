export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            status: undefined;
            newmeal: undefined;
            feedback: {
                type: neagtive | positive
            };
            meal: {
                id: string;
            }
        }
    }
}
import { createSlice } from "@reduxjs/toolkit";

const abilitySlice = createSlice({
    name: "abilitySlice",
    initialState: {
        championId: 266,
        damage: 3,
        utility: 2,
        toughness: 1,
        difficulty: "MODERATE",
        spell1Id: 4,
        spell2Id: 12,
        runes: {
            primary: [
                8010,
                9111,
                9105,
                8299
            ],
        },
        finalBuild: [
            6630,
            3123,
            3111,
            3065,
            3077,
            1036,
            3340
        ],
        earlyBuild: [
            1054,
            2003,
            3340
        ],
        midBuild: [
            1036,
            3123,
            1037,
            6029,
            3044,
            1001
        ],
        skillOrder: [
            "1",
            "2",
            "3"
        ]
    },
    reducers: {
        updateAbility: (state, action) => {

        }
    },
});

export const {
    updateAbility,
} = abilitySlice.actions;
export default abilitySlice.reducer;
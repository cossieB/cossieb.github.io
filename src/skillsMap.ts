interface S {
    [level: number]: [string, string]
}

export function skillsMap(skillLevel: number): [string, string] {
    if (skillLevel >= 8 ) {
        return ["#00ffea", "Excellent"]
    }
    if (skillLevel >= 6 ) {
        return ["springgreen", "Good"]
    }
    if (skillLevel >= 4 ) {
        return ["greenyellow", "Average"]
    }
    if (skillLevel >= 2 ) {
        return ["yellow", "Novice"]
    }
    else  {
        return ["red", "Beginner"]
    }
}
export const formattedInfoData = (info) => {
    return info.map((item) => ({
        calories: item.calories,
        proteines: item.proteines,
        glucides: item.glucides,
        lipides: item.lipides
    }))
}
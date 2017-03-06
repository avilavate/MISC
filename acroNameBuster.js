function acronymBuster(string) {
    var ACR =
        {
            'KPI': "key performance indicators",
            'EOD': "the end of the day",
            'TBD': "to be decided",
            'WAH': "work at home",
            'IAM': "in a meeting",
            'OOO': "out of office",
            'NRN': "no reply necessary",
            'CTA': "call to action",
            'SWOT': "strengths, weaknesses, opportunities and threats"
        }
    var keys = Object.keys(ACR);
    keys.forEach((i) => {
        string = string.replace(i, ACR[i]);
    });
    string = string.match(/[ABC].{3}/) !== null ? string.match(/[ABC].{3}/)[0] + " is an acronym. I do not like acronyms. Please remove them from your email." : string;
    return string;
}

console.log(acronymBuster('BRB I need to go into a KPIs meeting before EOP'));
interface Kicker {
    Kick(speed: number): void;
}

interface Puncher {
    Punch(speed: number): void;
}

type KickerOrPuncher = Kicker & Puncher;

function Attack(warrier: KickerOrPuncher) {
    warrier.Kick(10);
    warrier.Punch(20);

    // warrier.Cando();
}

class KickerPuncherClass  {
    Kick = (speed: number) => console.log("Kick speed", speed);
    Punch = (speed: number) => console.log("Punch speed", speed);
}


Attack(new KickerPuncherClass());
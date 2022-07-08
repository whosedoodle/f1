{
    async function getRaceInfo(season,round){
    try{
        let res = await fetch(`https://ergast.com/api/f1/${season}/${round}`)
        let data = await res.json()
        return data[0]
    } catch(err) {
        console.error(err)
    }
}

function buildRaceCard(raceObj){
    const card = document.createElement('div');
    card.className = 'card';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const driverNationality = document.createElement('h5');
    driverNationality.className = 'driverNationality'
    driverNationality.innerHTML = raceObj.name.official;

    const driverName = document.createElement('p');
    driverName.className = 'driverName'
    driverName.innerHTML = `Driver: ${raceObj.driverName.toLocaleString('')}`;

    cardBody.append(driverNationality);
    cardBody.append(driverName);

    card.append(cardBody);

    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3'

    col.append(card)

    const raceDisplay = document.getElementById('raceDisplay');

    cardDisplay.append(col);
}
}
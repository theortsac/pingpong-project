import * as React from 'react';
import './AddDataApp.css';

type Player = {
    firstName: string;
    lastName: string;
}

type Match = {
  winnerId: number;
  loserId: number;
  winnerPoints: number;
  loserPoints: number;
}

class AddDataForm extends React.Component {

    playerData: Player;
    matchData: Match;
    key: string;

    constructor(props: any) {
        super(props);
        this.playerData = {firstName: '', lastName: ''};
        this.matchData = {winnerId: 0, loserId: 0, winnerPoints: 0, loserPoints: 0};
        this.key = '';
        this.openAddPlayer = this.openAddPlayer.bind(this);
        this.openAddMatch = this.openAddMatch.bind(this);
        this.handleChangeMatchData = this.handleChangeMatchData.bind(this);
        this.handleChangePlayerData = this.handleChangePlayerData.bind(this);
    }


    openAddPlayer() {
        const url = `http://localhost:5500/addPlayer?firstName=${this.playerData['firstName']}&lastName=${this.playerData['lastName']}&key=${this.key}`;
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    handleChangePlayerData(event: any, field: string) {
        this.playerData[field as keyof typeof this.playerData] = event.target.value;
    }

    openAddMatch() {
        const url = `http://localhost:5500/addMatch?winnerId=${this.matchData['winnerId']}&loserId=${this.matchData['loserId']}&winnerPoints=${this.matchData['winnerPoints']}&loserPoints=${this.matchData['loserPoints']}&key=${this.key}`;
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    handleChangeMatchData(event: any, field: string) {
        this.matchData[field as keyof typeof this.matchData] = event.target.value;
    }

    handleChangeKey(event: any) {
        this.key = event.target.value;
    }

    render() {
        return (
            <div id='AddDataDiv'>
                <h1>Api Key</h1>
                <input type="text" onChange={event => this.handleChangeKey(event)}/>
                <h1>Add a player to the database</h1>
                <form onSubmit={this.openAddPlayer}>
                    <label>
                        First Name:
                        <input type="text" onChange={event => this.handleChangePlayerData(event, 'firstName')}/>
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input type="text" onChange={event => this.handleChangePlayerData(event, 'lastName')}/>
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <h1>Add a match to the database</h1>
                <form onSubmit={this.openAddMatch}>
                    <label>
                        Winner Id:
                        <input type="number" onChange={event => this.handleChangeMatchData(event, 'winnerId')}/>
                    </label>
                    <br />
                    <label>
                        Loser Id:
                        <input type="number" onChange={event => this.handleChangeMatchData(event, 'loserId')}/>
                    </label>
                    <br />
                    <label>
                        Winner Points:
                        <input type="number" onChange={event => this.handleChangeMatchData(event, 'winnerPoints')}/>
                    </label>
                    <br />
                    <label>
                        Loser Points:
                        <input type="number" onChange={event => this.handleChangeMatchData(event, 'loserPoints')}/>
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddDataForm;
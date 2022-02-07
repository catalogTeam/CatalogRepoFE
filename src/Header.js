function Header(props) {
    return (
      <header>

        <TableHeader />
        <TableBody
          characterData={props.characterData}
          removeCharacter={props.removeCharacter}
        />
      </header>
    );
  }
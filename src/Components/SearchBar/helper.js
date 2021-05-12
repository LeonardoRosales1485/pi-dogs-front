export function checker(stringA, stringB, stringC) {
  if (stringA === undefined) {
    alert(
      `Breed field is needed! (Select "Nothing" if you are looking by Temperament)`
    );
    return true;
  }
  if (stringB === undefined) {
    alert(
      `Weight field is needed! (Select "Nothing" if you are looking by Temperament)`
    );
    return true;
  }
  if (stringC === undefined) {
    alert(
      `Temperaments field is needed! (Select "Nothing" in Temperaments if you are looking by Breed)`
    );
    return true;
  }
}

export const noSelection = {
  value: 0,
  label: "Nothing",
};

export const ascending = {
  value: 1,
  label: "Ascending",
};

export const descending = {
  value: 2,
  label: "Descending",
};

export const weight = {
  value: 'W',
  label: "Weight",
};

export const abc = {
  value: 'A',
  label: "Alphabet",
};

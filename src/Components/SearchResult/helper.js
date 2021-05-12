export function sortAscending(data) {
  let result = data.sort(function (a, b) {
    if (parseInt(a.weight.metric.substring(0,2)) < parseInt(b.weight.metric.substring(0,2))) {
      return -1;
    }
    if (parseInt(a.weight.metric.substring(0,2)) > parseInt(b.weight.metric.substring(0,2))) {
      return 1;
    }
    return 0;
  });
  return result
}

export function sortDescending(data) {
  let result = data.sort(function (a, b) {
    if (parseInt(a.weight.metric.substring(0,2)) > parseInt(b.weight.metric.substring(0,2))) {
      return -1;
    }
    if (parseInt(a.weight.metric.substring(0,2)) < parseInt(b.weight.metric.substring(0,2))) {
      return 1;
    }
    return 0;
  });
  return result
}

export function sortAtoZ(data) {
  let result = data.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return result
}

export function sortZtoA(data) {
  let result = data.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return result
}

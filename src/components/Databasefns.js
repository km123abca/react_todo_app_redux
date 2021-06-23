export const loadToDB = (payload) => {
  let datum = localStorage.getItem("tododata");
  if (!datum) {
    datum = "[]";
  }
  datum = JSON.parse(datum);
  datum.push(payload);
  localStorage.setItem("tododata", JSON.stringify(datum));
};
export const getFromDB = () => {
  let datum = localStorage.getItem("tododata");
  if (!datum) {
    datum = "[]";
  }
  return JSON.parse(datum);
};
export const checkUnCheck = (id) => {
  let datum = localStorage.getItem("tododata");
  if (datum) {
    datum = JSON.parse(datum);
    datum = datum.map((x) => {
      if (x.id == id) x.done = !x.done;
      return x;
    });
    localStorage.setItem("tododata", JSON.stringify(datum));
  }
};
export const deleteItem = (id) => {
  let datum = localStorage.getItem("tododata");
  if (datum) {
    datum = JSON.parse(datum);
    datum = datum.filter((x) => x.id != id);
    localStorage.setItem("tododata", JSON.stringify(datum));
  }
};

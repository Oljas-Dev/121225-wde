class CopyEntity {
  static copyObject(obj) {
    const newObj = obj;
    if (obj.name) {
      newObj.name = "Oljas";
    }
    console.log(newObj);

    return newObj;
  }
}

const testObject = {
  name: "John",
  age: 25,
  hobby: ["music", "art"],
};

CopyEntity.copyObject(testObject);

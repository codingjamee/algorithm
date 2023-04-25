//두개의 문자열을 취하며 두 문자열이 서로의 아나그램이면 참
//아나그램은 두개의 문자열에 서로 동일한 빈도수로 존재하는것.

const validAnagram = (character1, character2) => {
  const object_A = {};
  const object_B = {};

  //a문자를 모두 key value pair로 만든다.
  //b문자를 모두 key value pair로 만든다.

  //a 문자열을 순서대로 돌면서 A객체의 key로 만들고 +1 한다.

  for (let i = 0; i < character1.length; i++) {
    if (object_A[character1[i]]) {
      object_A[character1[i]] += 1;
    } else {
      object_A[character1[i]] = 1;
    }
  }

  for (let i = 0; i < character2.length; i++) {
    if (object_B[character2[i]]) {
      object_B[character2[i]] += 1;
    } else {
      object_B[character2[i]] = 1;
    }
  }

  //A object를 돌면서 B object와 비교한다.
  //실제로 해당 키 밸류 페어가 동일한지.

  for (let key in object_A) {
    if (object_A[key] !== object_B[key]) {
      console.log(false);
      return;
    }
  }
  console.log(true);

  //object A를 돌면서 B와 비교?
  //object A안에 해당키
};

// answer

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

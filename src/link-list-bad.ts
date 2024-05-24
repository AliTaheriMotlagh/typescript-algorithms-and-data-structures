class BadLinkList {
  data: number;
  next: BadLinkList;
  constructor(data: number) {
    this.data = data;
  }
}
function main() {
  const nodeA = new BadLinkList(4);
  const nodeB = new BadLinkList(2);
  const nodeC = new BadLinkList(3);
  const nodeD = new BadLinkList(10);
  const nodeE = new BadLinkList(2);

  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;
  nodeD.next = nodeE;
  linkListCountr(nodeA);
}
main();

function linkListCountr(orginal: BadLinkList) {
  let counter = 1;
  let head = orginal;
  while (head.next != null) {
    counter++;
    head = head.next;
  }
  console.log(counter);
}

class LinkList {
  data: number;
  next: LinkList;
  constructor(data: number) {
    this.data = data;
  }
}
function main() {
  const nodeA = new LinkList(4);
  const nodeB = new LinkList(2);
  const nodeC = new LinkList(3);
  const nodeD = new LinkList(10);
  const nodeE = new LinkList(2);

  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;
  nodeD.next = nodeE;
  linkListCountr(nodeA);
}
main();

function linkListCountr(orginal: LinkList) {
  let counter = 1;
  let head = orginal;
  while (head.next != null) {
    counter++;
    head = head.next;
  }
  console.log(counter);
}

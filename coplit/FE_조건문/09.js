function makeLastSeenMsg(name, period) {
  // TODO: 여기에 코드를 작성합니다.
  if (period <= 60) return `${name}: ${period}분 전에 접속함`;
  if (period > 60 && period <= 1440) return `${name}: ${Math.floor(period / 60)}시간 전에 접속함`;
  if (period > 1440) return `${name}: ${Math.floor(period / 1440)}일 전에 접속함`;
}

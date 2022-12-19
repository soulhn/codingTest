function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0) return "INVALID SCORE";
  if (score >= 90 && score <= 100) {
    if (score > 97) return "A+";
    if (score < 94) return "A-";
    return "A";
  }
  if (score >= 80) {
    if (score > 87) return "B+";
    if (score < 84) return "B-";
    return "B";
  }
  if (score >= 70) {
    if (score > 77) return "C+";
    if (score < 74) return "C-";
    return "C";
  }
  if (score >= 60) {
    if (score > 67) return "D+";
    if (score < 64) return "D-";
    return "D";
  }

  if (score < 60) return "F";
}

/* For a given 2D vector described by cartesian coordinates of its initial point and terminal point in the following format:

[[x1, y1], [x2, y2]]

Your function must return this vector's length represented as a floating point number.

Error must be within 1e-7.

Coordinates can be integers or floating point numbers. */

////////////////////////////Solution////////////////////////////

function vectorLength(vector){
    return Math.abs(Math.sqrt(Math.pow(vector[0][0] - vector[1][0], 2) + Math.pow(vector[0][1] - vector[1][1], 2)));
  }
# https://crystal-lang.org/reference/syntax_and_semantics/structs.html

struct Point
  property x, y

  def initialize(@x : Int32, @y : Int32)
  end
end

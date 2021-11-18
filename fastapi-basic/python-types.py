# https://fastapi.tiangolo.com/python-types/
# https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html

# Variables
year: int = 2021
hogeFuga: str = 'Hoge'
child: bool
if year < 2021:
  hogeFuga = 'Test'
else:
  child = True

print(hogeFuga)
print(child)

# Built-in types
from typing import List, Set, Dict, Tuple, Optional

listTest: List[int] = [1]
setTest: Set[str] = {'aaa', 'bbb'}
dictTest: Dict[str, int] = {'sample': 22, 'testing': 333}
tupleTest: Tuple[int, str, float] = (3, "hi", 5.55)

def calculate(x: Optional[int], y: int) -> int:
  if x is None:
    return y
  return x + y
print(calculate(None, 99)) # return 99
print(calculate(1, 3)) # return 4

# python3.9からはデフォルトで組み込まれるようになり、typingでimportする必要がなくなった
# listTest: list[int] = [1]
# setTest: set[str] = {'aaa', 'bbb'}
# dictTest: dict[str, int] = {'sample': 22, 'testing': 333}
# tupleTest: tuple[int, str, float] = (3, "hi", 5.55)

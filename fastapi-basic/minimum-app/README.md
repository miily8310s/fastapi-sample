```bash
# 依存パッケージをインストール
$ python3 -m pip install -r requirements.txt

# basicのところはpyファイルに適宜置き換え
$ uvicorn basic:app --reload

# ユニットテスト起動
$ pytest
```

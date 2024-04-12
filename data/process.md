법정동의 경계 데이터(구역의 도형)    
https://business.juso.go.kr/addrlink/adresInfoProvd/guidance/provdAdresInfo.do   

법정동 데이터   
https://www.data.go.kr/data/15063424/fileData.do

두 데이터를 조인하여 내 데이터베이스에 저장     
socketUser 가 위치 정보를 전송하면 가장 가까운 지역을 찾기 위해서   


```python
import geopandas as gpd
import pandas as pd
```


```python
gdf = gpd.read_file('./11000/TL_SCCO_EMD.shp', encoding='euc-kr')
df = pd.read_csv('./법정동_20240208.csv', encoding='euc-kr')
```


```python
# merge 하려면  key의 타입을 맞춰줘야 하고 key 이름이 같아야 함
gdf['EMD_CD'] = gdf['EMD_CD'].astype(int)
df = df.rename(columns={"법정동코드": "EMD_CD"})
```


```python
gdf.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>EMD_CD</th>
      <th>EMD_ENG_NM</th>
      <th>EMD_KOR_NM</th>
      <th>geometry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>11110101</td>
      <td>Cheongun-dong</td>
      <td>청운동</td>
      <td>POLYGON ((953700.022 1954605.065, 953693.871 1...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>11110102</td>
      <td>Singyo-dong</td>
      <td>신교동</td>
      <td>POLYGON ((953233.465 1953996.984, 953235.183 1...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>11110103</td>
      <td>Gungjeong-dong</td>
      <td>궁정동</td>
      <td>POLYGON ((953560.228 1954257.466, 953561.190 1...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>11110104</td>
      <td>Hyoja-dong</td>
      <td>효자동</td>
      <td>POLYGON ((953519.843 1953890.785, 953518.489 1...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>11110105</td>
      <td>Changseong-dong</td>
      <td>창성동</td>
      <td>POLYGON ((953516.123 1953734.362, 953516.526 1...</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 현재 좌표계가 EPSG 5179 인데 이는 평면좌표계이므로 거리 등을 계산할 때 오차가 날 수 있다.
# 지구 곡면을 고려한 위도 경도 좌표로 바꿔줘야 정확한 거리 계산이 가능함.
# socketUser 핸드폰으로도 위도 경도 데이터를 받아오기 때문에 디비에도 위도 경도로 저장해 놓는 게 좋을 것 같다.

# shp 파일에는 좌표계 정보가 없으므로 명시적으로 넣어줌
gdf.crs = 'EPSG:5179'

gdf = gdf.to_crs('EPSG:4326')
```


```python
# 법정동 데이터
df = df.sort_values(by="EMD_CD")
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>EMD_CD</th>
      <th>시도명</th>
      <th>시군구명</th>
      <th>읍면동명</th>
      <th>리명</th>
      <th>순위</th>
      <th>생성일자</th>
      <th>삭제일자</th>
      <th>과거법정동코드</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>20246</th>
      <td>1100000000</td>
      <td>서울특별시</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>11.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>20247</th>
      <td>1111000000</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>20248</th>
      <td>1111010100</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>청운동</td>
      <td>NaN</td>
      <td>1.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>20249</th>
      <td>1111010200</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>신교동</td>
      <td>NaN</td>
      <td>2.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>20250</th>
      <td>1111010300</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>궁정동</td>
      <td>NaN</td>
      <td>3.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 지리 데이터는 법정동 코드가 11110101 인데
# 일반 데이터는            1111010100
# 지리 데이터는 읍면동까지고 리 에 대한 코드는 빠져있기 때문이다.
# merge 시 key 를 맞춰주기 위해 지리데이터에 00 삽입
gdf['EMD_CD'] = gdf['EMD_CD'] * 100
```


```python
merged = pd.merge(df, gdf, on='EMD_CD', how='inner')
```


```python
merged.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>EMD_CD</th>
      <th>시도명</th>
      <th>시군구명</th>
      <th>읍면동명</th>
      <th>리명</th>
      <th>순위</th>
      <th>생성일자</th>
      <th>삭제일자</th>
      <th>과거법정동코드</th>
      <th>EMD_ENG_NM</th>
      <th>EMD_KOR_NM</th>
      <th>geometry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1111010100</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>청운동</td>
      <td>NaN</td>
      <td>1.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Cheongun-dong</td>
      <td>청운동</td>
      <td>POLYGON ((126.97556 37.58968, 126.97549 37.589...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1111010200</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>신교동</td>
      <td>NaN</td>
      <td>2.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Singyo-dong</td>
      <td>신교동</td>
      <td>POLYGON ((126.97031 37.58418, 126.97033 37.584...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1111010300</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>궁정동</td>
      <td>NaN</td>
      <td>3.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Gungjeong-dong</td>
      <td>궁정동</td>
      <td>POLYGON ((126.97400 37.58654, 126.97401 37.586...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1111010400</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>효자동</td>
      <td>NaN</td>
      <td>4.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Hyoja-dong</td>
      <td>효자동</td>
      <td>POLYGON ((126.97356 37.58323, 126.97355 37.582...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1111010500</td>
      <td>서울특별시</td>
      <td>종로구</td>
      <td>창성동</td>
      <td>NaN</td>
      <td>5.0</td>
      <td>1988-04-23</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Changseong-dong</td>
      <td>창성동</td>
      <td>POLYGON ((126.97353 37.58182, 126.97354 37.581...</td>
    </tr>
  </tbody>
</table>
</div>




```python
merged = merged.rename(columns={'EMD_CD': 'code', '시도명': 'c1', '시군구명': 'c2', '읍면동명': 'c3', '리명': 'c4', '순위': 'order', '생성일자': 'created_at', '삭제일자': 'deleted_at', '과거법정동코드': 'prev_code', 'EMD_ENG_NM': 'eng_name', 'EMD_KOR_NM': 'name'})
```


```python
merged.to_csv('seoul_emd_geomety.csv', sep='|')
```

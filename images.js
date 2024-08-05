    // 定義基礎URL
    const baseUrl = "https://raw.githubusercontent.com/A-Fu-1979/774images/main/";

    // 修改後的images陣列
    const images = [{
        src: "空位Aslot.png",
        class: "Aslot",
        alt: "空位"
      },
      {
        src: "SK_Vanessa.png",
        class: "Vanessa",
        alt: "凡妮莎"
      },
      {
        src: "SK_Rachel.png",
        class: "Rachel",
        alt: "雷伊潔兒"
      },
      {
        src: "SK_Eileene.png",
        class: "Eileene",
        alt: "亞依琳"
      },
      {
        src: "SK_Dellons.png",
        class: "Dellons",
        alt: "戴倫斯"
      },
      {
        src: "GL_Orkah.png",
        class: "Orkah",
        alt: "奧勒卡"
      },
      {
        src: "GL_Sizar.png",
        class: "Sizar",
        alt: "賽薩爾"
      },
      {
        src: "GL_Zahara.png",
        class: "Zahara",
        alt: "札哈拉"
      },
      {
        src: "SC_BlackRose.png",
        class: "BlackRose",
        alt: "黑玫瑰"
      },
      {
        src: "SoD_Misha.png",
        class: "Misha",
        alt: "米莎"
      },
      {
        src: "HideP1_Ingrid.png",
        class: "Ingrid",
        alt: "英格麗德"
      },
      {
        src: "4L_SunWukong.png",
        class: "SunWukong",
        alt: "孫悟空"
      },
      {
        src: "4L_LuBu.png",
        class: "LuBu",
        alt: "呂布"
      },
      {
        src: "ECW_Soi.png",
        class: "Soi",
        alt: "索伊"
      },
      {
        src: "3K_XiaoQiao.png",
        class: "XiaoQiao",
        alt: "小喬"
      },
      {
        src: "AP_Xiao.png",
        class: "Xiao",
        alt: "蕭歐"
      },
      {
        src: "AP_BaiJiao.png",
        class: "BaiJiao",
        alt: "百閣"
      },
      {
        src: "AP_BiDam.png",
        class: "BiDam",
        alt: "毗曇"
      },
      {
        src: "collabOR_DokjaKim.png",
        class: "DokjaKim",
        alt: "金獨子"
      },
      {
        src: "collabOR_HuiwonJeong.png",
        class: "HuiwonJeong",
        alt: "鄭熙媛"
      },
      {
        src: "4LO_Teo.png",
        class: "Teo",
        alt: "太烏"
      },
      {
        src: "4LO_Yeonhee.png",
        class: "Yeonhee",
        alt: "妍熙"
      },
      {
        src: "4LO_Kyle.png",
        class: "Kyle",
        alt: "凱爾"
      },
      {
        src: "4LO_Karma.png",
        class: "Karma",
        alt: "卡爾瑪"
      },
      {
        src: "SP_Kwonho.png",
        class: "Kwonho",
        alt: "拳豪"
      },
      {
        src: "collabRBB_Cheongmyeong.png",
        class: "Cheongmyeong",
        alt: "青明"
      },
      {
        src: "collabRBB_Baekcheon.png",
        class: "Baekcheon",
        alt: "白天"
      },
      {
        src: "collabRBB_Jogeol.png",
        class: "Jogeol",
        alt: "趙傑"
      },
      {
        src: "PU_Lene.png",
        class: "Lene",
        alt: "萊娜"
      },
      {
        src: "collabKOF98_KyoKusanagi.png",
        class: "KyoKusanagi",
        alt: "草薙京"
      },
      {
        src: "collabKOF98_MaiShiranui.png",
        class: "MaiShiranui",
        alt: "不知火舞"
      },
      {
        src: "SF_ShaneSwimsuit.png",
        class: "ShaneSwimsuit",
        alt: "賽茵泳裝"
      },
      {
        src: "Biya_Biya.png",
        class: "Biya",
        alt: "Biya"
      },
      {
        src: "DK_Platin.png",
        class: "Platin",
        alt: "伯萊登"
      },
      {
        src: "HideP2_XiangYu.png",
        class: "XiangYu",
        alt: "項羽"
      },
      {
        src: "collabSLF_ArthurPencilgon.png",
        class: "ArthurPencilgon",
        alt: "亞瑟"
      },
      {
        src: "collabSLF_Sunraku.png",
        class: "Sunraku",
        alt: "桑樂"
      },
      {
        src: "collabSLF_OiKatzo.png",
        class: "OiKatzo",
        alt: "追加鰹魚"
      },
      {
        src: "CG_Reginleif.png",
        class: "Reginleif",
        alt: "瑞金蕾依芙"
      },
      {
        src: "collabHP_Gabimaru.png",
        class: "Gabimaru",
        alt: "畫眉丸"
      },
      {
        src: "collabHP_Sagiri.png",
        class: "Sagiri",
        alt: "佐切"
      },
      {
        src: "collabHP_Yuzuriha.png",
        class: "Yuzuriha",
        alt: "杠"
      },
      {
        src: "i_CR_burn.png",
        class: "ChaosRuins_burn",
        alt: "混沌遺跡灼燒"
      },
      {
        src: "i_CR_bleed.png",
        class: "ChaosRuins_bleed",
        alt: "混沌遺跡出血"
      },
      {
        src: "i_CR_poison.png",
        class: "ChaosRuins_poison",
        alt: "混沌遺跡中毒"
      },
      {
        src: "e_incr_fin_ATK.png",
        class: "e_incr_fin_ATK",
        alt: "增加最終攻擊"
      },
      {
        src: "e_incr_CriHit_rate.png",
        class: "e_incr_CriHit_rate",
        alt: "增加暴擊率"
      },
      {
        src: "e_incr_fin_CriHit_damage.png",
        class: "e_incr_fin_CriHit_dmg",
        alt: "增加最終暴擊傷害"
      },
      {
        src: "e_decr_fin_Defense.png",
        class: "e_decr_fin_Def",
        alt: "降低最終防禦"
      },
      {
        src: "e_decr_fin_Evasion.png",
        class: "e_decr_fin_Eva",
        alt: "降低最終迴避"
      },
      {
        src: "e_incr_ATK_speed.png",
        class: "e_incr_ATK_speed",
        alt: "增加攻速"
      },
      {
        src: "e_incr_weaknessATK_rate.png",
        class: "e_incr_weakATK_rate",
        alt: "增加弱點機率"
      },
      {
        src: "e_incr_fin_weaknessATK_damage.png",
        class: "e_incr_fin_weakATK_dmg",
        alt: "增加弱點傷害"
      },
      {
        src: "e_Karma.png",
        class: "e_Karma",
        alt: "報應增傷"
      },
      {
        src: "e_LuBu.png",
        class: "e_LuBu",
        alt: "受到傷害增加"
      },
      {
        src: "e_Shane.png",
        class: "e_Shane",
        alt: "增加額外傷害機率"
      },
      {
        src: "e_Kyle.png",
        class: "e_Kyle",
        alt: "降低暴擊率抵抗"
      },
      {
        src: "i_type_Defense",
        class: "i_type_Defense",
        alt: "i防禦型"
      },

    ];

    // 在需要使用完整URL的地方，可以這樣組合：
    function getFullImageUrl(imageSrc) {
      return baseUrl + imageSrc;
    }

    let originalContent;
    let currentType;

    function loadImages() {
      images.forEach(image => {
        const imgElements = document.querySelectorAll(`img.${image.class}`);
        imgElements.forEach(imgElement => {
          imgElement.src = getFullImageUrl(image.src);
          imgElement.alt = image.alt;
        });
      });
    }


    function toggleCharacters(type) {
      const table = document.getElementById('EffectCategory');
      const iconCell = this.parentNode;
      const isExpanded = iconCell.dataset.expanded === 'true';

      const characterSets = {
        e_incr_fin_CriHit_dmg: ['Cheongmyeong', 'OiKatzo', 'Dellons'],
        e_incr_fin_ATK: ['ArthurPencilgon', 'DokjaKim', 'KyoKusanagi', 'Eileene'],
        e_incr_CriHit_rate: ['Vanessa', 'Sunraku', 'Biya', 'Rachel'],
        e_decr_fin_Def: ['Reginleif', 'Lene', 'XiaoQiao', 'Ingrid'],
        e_decr_fin_Eva: ['Platin', 'Soi', 'XiangYu', 'MaiShiranui'],
        e_incr_ATK_speed: ['Teo', 'Gabimaru'],
        e_incr_weakATK_rate: ['SunWukong', 'Sagiri'],
        e_incr_fin_weakATK_dmg: ['Yeonhee', 'Yuzuriha'],
        e_Karma: ['Karma'],
        e_LuBu: ['LuBu'],
        e_Kyle: ['Kyle'],
        e_Shane: ['ShaneSwimsuit']
      };

      const textSets = {
        e_incr_fin_CriHit_dmg: ['暴傷20%', '暴傷20%', '暴傷20%'],
        e_incr_fin_ATK: ['終攻25%', '終攻25%', '終攻25%', '終攻25%'],
        e_incr_CriHit_rate: ['暴率24%', '暴率20%', '暴率20%', '暴率20%'],
        e_decr_fin_Def: ['降防50%', '降防25%', '降防25%', '降防25%'],
        e_decr_fin_Eva: ['降迴60%', '降迴50%', '降迴50%', '降迴40%'],
        e_incr_ATK_speed: ['攻速24%', '攻速20%'],
        e_incr_weakATK_rate: ['弱點24%', '弱點20%'],
        e_incr_fin_weakATK_dmg: ['弱傷24%', '弱傷20%'],
        e_Karma: ['報應30%'],
        e_LuBu: ['受傷30%'],
        e_Kyle: ['降抗暴24%'],
        e_Shane: ['額外率24%']
      };

      if (!isExpanded) {
        originalContent = table.innerHTML;
        currentType = type;
        const characters = characterSets[type];
        const texts = textSets[type];

        // 清除表格內容
        table.querySelectorAll('td').forEach(td => {
          td.innerHTML = '';
        });

        // 顯示新的內容
        characters.forEach((character, index) => {
          const td = table.rows[Math.floor(index / 4)].cells[index % 4];
          td.innerHTML = `
                <div class="image-container">
                    <img class="${character}">
                    <p class="P_effect_11">${texts[index]}</p>
                </div>
            `;
        });

        // 在左下角添加返回按鈕
        const lastRow = table.rows[table.rows.length - 1];
        const returnCell = lastRow.cells[0];
        returnCell.innerHTML = `<img id="returnButton" src="${getFullImageUrl('returnButton.png')}" alt="返回">`;
        document.getElementById('returnButton').addEventListener('click', returnToOriginal);
        iconCell.dataset.expanded = 'true';

      } else {
        returnToOriginal();
      }

      loadImages();
    }

    function returnToOriginal() {
      const table = document.getElementById('EffectCategory');
      table.innerHTML = originalContent;
      document.getElementById(`${currentType}Toggle`).parentNode.dataset.expanded = 'false';
      addToggleListeners();
    }

    function addToggleListeners() {
      const toggleTypes = [
        'e_incr_fin_CriHit_dmg', 'e_incr_fin_ATK', 'e_incr_CriHit_rate', 'e_decr_fin_Def', 'e_decr_fin_Eva',
        'e_incr_ATK_speed', 'e_incr_weakATK_rate', 'e_incr_fin_weakATK_dmg',
        'e_Karma', 'e_LuBu', 'e_Kyle', 'e_Shane'
      ];

      toggleTypes.forEach(type => {
        const element = document.getElementById(`${type}Toggle`);
        if (element) {
          element.addEventListener('click', function() {
            toggleCharacters.call(this, type);
          });
        }
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      loadImages();
      addToggleListeners();
    });

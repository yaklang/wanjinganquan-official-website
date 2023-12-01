<script setup>
</script>

<template>
  <Title>千机—知识增强网络安全大模型应用</Title>
  <div class="mt-[86px]">
    <!-- 万径千机 banner -->
    <div class="relative h-[411px] bg-[#DEEEFD]">
      <div class="bottom-left-bg absolute left-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-left.png" class="h-[411px]" />
      </div>
      <div class="bottom-right-bg absolute right-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-right.png" class="h-[411px]" />
      </div>
      <div class="wjaq-container mx-auto h-[100%] flex flex-col justify-center items-center">
        <div class="text-[52px]"><span class="font-bold-600 color-[#007AFF]">万径千机</span>——知识增强网络安全大模型应用</div>
        <div class="text-[18px] mt-[20px]">融合“千万”攻防知识，凝炼“百万”决策经验，让大模型更“可靠”、更“高效”地服务一线场景</div>
      </div>
    </div>
    <div class="wjaq-container mx-auto overflow-hidden">
      <!-- 关键特性 -->
      <div class="mt-[235px]">
        <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[250px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
            fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            关键特性
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="flex justify-between mb-[100px]">
          <div class="w-[28%]">
            <div class="font-bold-600 mb-[25px] text-center text-[25px]">领域知识增强</div>
            <div class="color-[#868686] mb-[122px] leading-[30px]">千机是一款使用RLHF优化并利用知识图谱进行领域知识增强的垂直领域大语言模型应用。</div>
            <div class="text-center">
              <NuxtImg src="/Images/qj_lyzszq.png" class="w-[280px]" />
            </div>
          </div>
          <div class="w-[28%]">
            <div class="font-bold-600 mb-[25px] text-center text-[25px]">指令优化与丰富</div>
            <div class="color-[#868686] mb-[122px] leading-[30px]">通过图谱背景知识，千机能对用户原始指令进行精准整理和优化，使指令描述更准确、更丰富。</div>
            <div class="text-center">
              <NuxtImg src="/Images/qj_zlyhyff.png" class="w-[250px]" />
            </div>
          </div>
          <div class="w-[28%]">
            <div class="font-bold-600 mb-[25px] text-center text-[25px]">精准响应与约束</div>
            <div class="color-[#868686] mb-[122px] leading-[30px]">千机不仅生成回答，还利用背景知识约束生成的文本，缩小计算响应与背景知识的偏离度，确保回答准确无误。</div>
            <div class="text-center">
              <NuxtImg src="/Images/qj_jzxyyys.png" class="w-[245px]" />
            </div>
          </div>
        </div>
      </div>
      <div class="qj_cont bg-center bg-contain bg-no-repeat">
        <!-- 功能亮点 -->
        <div class="mt-[182px]">
          <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[250px]">
            <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
            </svg>
            <div class="text-[40px] text-center font-bold-600">
              功能亮点
            </div>
            <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
            </svg>
          </div>
          <!-- 漏洞情报 -->
          <div class="flex justify-between items-center px-[10px] mb-[100px]">
            <div data-aos="fade-right">
              <NuxtImg src="/Images/qj_ldqb.png" class="h-[421px]" />
            </div>
            <div data-aos="fade-left" class="w-[520px]">
              <div class="text-[32px] font-bold-600 mb-[20px]">漏洞情报</div>
              <div class="text-[18px] font-bold-600 mb-[18px]">外文漏洞译制</div>
              <div class="text-[16px] color-[#646363] mb-[37px] leading-[30px]">情报源涵盖CVE、Github、EXploitDB、社区文章等。可读性已与人类安全专家译制效果无任何差异。</div>
              <div class="text-[18px] font-bold-600 mb-[18px]">漏洞情报问答</div>
              <div class="text-[16px] font-bold-600 mb-[12px]">CVE漏洞情报</div>
              <div class="text-[16px] color-[#646363] mb-[20px] leading-[30px]">
                对于特定漏洞的回答正确率高达92.1%（测试集验证结果），并能够在多轮人机交互过程中提供更详细更有价值的漏洞情报，且可解释性与稳定性很高。
              </div>
              <div class="text-[16px] font-bold-600 mb-[12px]">通用漏洞情报</div>
              <div class="text-[16px] color-[#646363] leading-[30px]">对于安全场景中的通用知识掌握，万径千机水平已趋近中高级安全专家，并随着不断的训练与优化，其能力还将得到更多涌现。</div>
            </div>
          </div>
          <!-- 辅助决策 -->
          <div class="flex justify-between items-center px-[10px]">
            <div data-aos="fade-right" class="w-[520px]">
              <div class="text-[32px] font-bold-600 mb-[20px]">辅助决策</div>
              <div class="mb-[15px]">
                <span class="font-bold-600">应急响应辅助决策 — </span>
                <span class="color-[#646363]">快速出具正确的应急响应方案。</span>
              </div>
              <div class="mb-[15px]">
                <span class="font-bold-600">社工诱饵生成 — </span>
                <span class="color-[#646363] leading-[30px]">快速生成大量内容差异的社工诱饵，帮助企业攻防演习过程中考察员工意识。</span>
              </div>
              <div class="mb-[15px]">
                <span class="font-bold-600">WEBSHELL研判 — </span>
                <span class="color-[#646363] leading-[30px]">能基于代码逻辑及其最终实现功能，识别市面上绝大多数的“免杀”WebShell，供安全专家决策参考。</span>
              </div>
            </div>
            <div data-aos="fade-left">
              <NuxtImg src="/Images/qj_fzjc.png" class="w-[400px]" />
            </div>
          </div>
        </div>
        <!-- POC代码生成 -->
        <div class="mt-[120px]">
          <div class="relative py-[15px] px-[40px] mb-[80px] mx-auto w-[350px]">
            <div class="text-[32px] text-center font-bold-600">
              POC代码生成
            </div>
          </div>
          <NuxtImg src="/Images/qj_rectangle.png" class="w-[1150px] ml-[60px]" />
        </div>
        <!-- 大模型赋能产业发展 -->
        <div class="mb-[100px] mt-[100px] mb-[160px]">
          <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[450px]">
            <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
            </svg>
            <div class="text-[40px] text-center font-bold-600">
              大模型赋能产业发展
            </div>
            <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
            </svg>
          </div>
          <div class="relative">
            <div data-aos="fade-down" class="w-[260px] mx-auto">
              <div class="text-[18px] mb-[10px] font-bold-600">增强安全保障系数</div>
              <div class="text-[16px] color-[#646363] leading-[30px]">千机具备原子操作级代码分析能力，对各类未知数据样本都具备一定的研判效果。</div>
            </div>
            <div class="flex justify-between items-center mt-[25px] mb-[50px]">
              <div data-aos="fade-left">
                <div class="w-[260px] mb-[75px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">提高数据运营效率</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">通过大模型对多源异构的安全运营数据进行语义归一化处理，实现数据的上下文标准统一流转。</div>
                </div>
                <div class="w-[260px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">降低人力资源成本</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">利用领域大模型的专业知识处理能力充当AI教练，降低从业人员的培训成本和运营成本。</div>
                </div>
              </div>
              <div>
                <NuxtImg src="/Images/qj_cyfn.png" class="w-[400px]" />
              </div>
              <div data-aos="fade-right">
                <div class="w-[260px] mb-[75px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">融合安全防护设备</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">结合思维链技术，千机能够以极低成本将企业各类安全防护设备资源进行融合，使其成为一个完整的安全运营系统。</div>
                </div>
                <div class="w-[260px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">沉淀模型优化场景</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">经过大量真实业务场景的实践，千机能够根据场景实际需求通过微调与专业知识补充，不断完善自身功能。</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="w-[260px] mx-auto">
              <div class="text-[18px] mb-[10px] font-bold-600">提高应急响应效率</div>
              <div class="text-[16px] color-[#646363] leading-[30px]">利用大模型构建应急响应标准流程，并在具体事件处置过程中，使用大模型进行辅助决策。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.qj_cont {
  background-image: url("/Images/qj_bg.png");
}
</style>

package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotDwellingIncidentCV.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotDwellingIncidentCV_600Expressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotDwellingIncidentCV.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotDwellingIncidentCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_onEnter_109 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_600) : void {
      def.onEnter(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_onEnter_111 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_700) : void {
      def.onEnter(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_onEnter_113 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_800) : void {
      def.onEnter(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_onEnter_115 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_default) : void {
      def.onEnter(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_onEnter_118 (def :  pcf.ClaimSnapshotIncidentAssessDV_600) : void {
      def.onEnter(claim, incident, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_onEnter_120 (def :  pcf.ClaimSnapshotIncidentAssessDV_700) : void {
      def.onEnter(claim, incident, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_onEnter_122 (def :  pcf.ClaimSnapshotIncidentAssessDV_800) : void {
      def.onEnter(claim, incident, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_onEnter_124 (def :  pcf.ClaimSnapshotIncidentAssessDV_default) : void {
      def.onEnter(claim, incident, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_refreshVariables_110 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_600) : void {
      def.refreshVariables(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_refreshVariables_112 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_700) : void {
      def.refreshVariables(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_refreshVariables_114 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_800) : void {
      def.refreshVariables(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function def_refreshVariables_116 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_default) : void {
      def.refreshVariables(claim, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_refreshVariables_119 (def :  pcf.ClaimSnapshotIncidentAssessDV_600) : void {
      def.refreshVariables(claim, incident, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_refreshVariables_121 (def :  pcf.ClaimSnapshotIncidentAssessDV_700) : void {
      def.refreshVariables(claim, incident, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_refreshVariables_123 (def :  pcf.ClaimSnapshotIncidentAssessDV_800) : void {
      def.refreshVariables(claim, incident, snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 289, column 21
    function def_refreshVariables_125 (def :  pcf.ClaimSnapshotIncidentAssessDV_default) : void {
      def.refreshVariables(claim, incident, snapshot)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotDwellingIncidentCV.600.pcf: line 20, column 31
    function initialValue_0 () : dynamic.Dynamic {
      return incidentParam
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotDwellingIncidentCV.600.pcf: line 280, column 25
    function mode_117 () : java.lang.Object {
      return 600
    }
    
    // 'value' attribute on TextCell (id=RoomType_Cell) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 91, column 58
    function sortValue_19 (roomDamage :  dynamic.Dynamic) : java.lang.Object {
      return roomDamage.RoomType
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 36, column 48
    function valueRoot_2 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextInput (id=EMSVendor_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 150, column 50
    function valueRoot_50 () : java.lang.Object {
      return incident.ems
    }
    
    // 'value' attribute on TextInput (id=EMSVendor_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 161, column 50
    function valueRoot_54 () : java.lang.Object {
      return incident.debrisremoval
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 177, column 48
    function valueRoot_58 () : java.lang.Object {
      return incident.Claim.LossLocation
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 36, column 48
    function value_1 () : dynamic.Dynamic {
      return incident.PropertyDesc
    }
    
    // 'value' attribute on TextInput (id=DamageTypesLabel_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 57, column 50
    function value_10 () : dynamic.Dynamic {
      return null
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Mold_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 267, column 50
    function value_103 () : dynamic.Dynamic {
      return incident.MoldInvolved
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Hazard_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 272, column 50
    function value_106 () : dynamic.Dynamic {
      return incident.HazardInvolved
    }
    
    // 'value' attribute on InputIterator (id=DamageTypesIterator) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 62, column 62
    function value_18 () : gw.api.claim.DamageManager[] {
      return gw.api.claim.HomeownersHelper.getDamages(claim).where( \ d -> snapshot[d.ClaimProperty.Name] != null)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotDwellingIncidentCV.600.pcf: line 77, column 53
    function value_26 () : dynamic.Dynamic {
      return incident.DwellingRoomDamages
    }
    
    // 'value' attribute on TextInput (id=MaterialsDamaged_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 100, column 50
    function value_27 () : dynamic.Dynamic {
      return incident.MaterialsDamaged
    }
    
    // 'value' attribute on TextInput (id=DamagedAreaSize_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 105, column 50
    function value_30 () : dynamic.Dynamic {
      return incident.DamagedAreaSize
    }
    
    // 'value' attribute on TextInput (id=EstimatedReceived_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 114, column 48
    function value_33 () : dynamic.Dynamic {
      return incident.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 120, column 81
    function value_37 () : dynamic.Dynamic {
      return incident.EstRepairCost
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 43, column 48
    function value_4 () : dynamic.Dynamic {
      return incident.Description
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 126, column 81
    function value_42 () : dynamic.Dynamic {
      return incident.EstRepairTime
    }
    
    // 'value' attribute on TextInput (id=AlreadyRepaired_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 131, column 48
    function value_46 () : dynamic.Dynamic {
      return incident.AlreadyRepaired
    }
    
    // 'value' attribute on TextInput (id=EMSVendor_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 150, column 50
    function value_49 () : dynamic.Dynamic {
      return incident.ems.DisplayName
    }
    
    // 'value' attribute on TextInput (id=EMSVendor_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 161, column 50
    function value_53 () : dynamic.Dynamic {
      return incident.debrisremoval.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 177, column 48
    function value_57 () : dynamic.Dynamic {
      return incident.Claim.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_ClassType_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 186, column 50
    function value_60 () : dynamic.Dynamic {
      return incident.ClassType
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumStories_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 191, column 50
    function value_63 () : dynamic.Dynamic {
      return incident.NumStories
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_RoofMaterial_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 196, column 50
    function value_66 () : dynamic.Dynamic {
      return incident.RoofMaterial
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_ExtWallMat_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 201, column 50
    function value_69 () : dynamic.Dynamic {
      return incident.ExtWallMat
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 48, column 48
    function value_7 () : dynamic.Dynamic {
      return incident.LossEstimate
    }
    
    // 'value' attribute on DateInput (id=YearBuilt_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 207, column 50
    function value_72 () : dynamic.Dynamic {
      return incident.YearBuilt
    }
    
    // 'value' attribute on TextInput (id=PropertySize_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 212, column 50
    function value_75 () : dynamic.Dynamic {
      return incident.PropertySize
    }
    
    // 'value' attribute on TextInput (id=OccupancyType_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 220, column 50
    function value_78 () : dynamic.Dynamic {
      return incident.OccupancyType
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_LossArea_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 225, column 50
    function value_81 () : dynamic.Dynamic {
      return incident.LossArea
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumberOfPeopleOnPolicy_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 230, column 50
    function value_84 () : dynamic.Dynamic {
      return incident.NumberOfPeopleOnPolicy
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_YearsInHome_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 235, column 50
    function value_87 () : dynamic.Dynamic {
      return incident.YearsInHome
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_SprinklerType_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 245, column 52
    function value_90 () : dynamic.Dynamic {
      return incident.SprinklerType
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumSprinkler_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 250, column 52
    function value_93 () : dynamic.Dynamic {
      return incident.NumSprinkler
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumSprinkOper_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 255, column 52
    function value_96 () : dynamic.Dynamic {
      return incident.NumSprinkOper
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_SprinkRetServ_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 260, column 52
    function value_99 () : dynamic.Dynamic {
      return incident.SprinkRetServ
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotDwellingIncidentCV.600.pcf: line 237, column 81
    function visible_102 () : java.lang.Boolean {
      return incident.Claim.LossCause.Code == "fire"
    }
    
    // 'visible' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 120, column 81
    function visible_36 () : java.lang.Boolean {
      return incident.EstimatesReceived.Code == "yes"
    }
    
    // 'visible' attribute on InputSet (id=EMSInputSet) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 143, column 50
    function visible_52 () : java.lang.Boolean {
      return incident.ems != null
    }
    
    // 'visible' attribute on InputSet (id=DebrisRemovalInputSet) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 154, column 60
    function visible_56 () : java.lang.Boolean {
      return incident.debrisremoval != null
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get incident () : dynamic.Dynamic {
      return getVariableValue("incident", 0) as dynamic.Dynamic
    }
    
    property set incident ($arg :  dynamic.Dynamic) {
      setVariableValue("incident", 0, $arg)
    }
    
    property get incidentParam () : dynamic.Dynamic {
      return getRequireValue("incidentParam", 0) as dynamic.Dynamic
    }
    
    property set incidentParam ($arg :  dynamic.Dynamic) {
      setRequireValue("incidentParam", 0, $arg)
    }
    
    property get snapshot () : dynamic.Dynamic {
      return getRequireValue("snapshot", 0) as dynamic.Dynamic
    }
    
    property set snapshot ($arg :  dynamic.Dynamic) {
      setRequireValue("snapshot", 0, $arg)
    }
    
    function approvedTotal(itemLine : dynamic.Dynamic) : gw.api.financials.CurrencyAmount {
      var TotalOfApproved: gw.api.financials.CurrencyAmount = gw.api.util.CCCurrencyUtil.getStrict(java.math.BigDecimal.ZERO, claim.Currency)
      for (aline in itemLine) {
        if (aline.Action == "approve") {
          if (aline.EstimateAmount != null) {
            TotalOfApproved = TotalOfApproved + (aline.EstimateAmount as gw.api.financials.CurrencyAmount)
          }
        }
      }
      return TotalOfApproved;
    }
    
    function reviewTotal(itemLine : dynamic.Dynamic) : gw.api.financials.CurrencyAmount {
      var TotalOfInReview: gw.api.financials.CurrencyAmount = gw.api.util.CCCurrencyUtil.getStrict(java.math.BigDecimal.ZERO, claim.Currency)
      for (aline in itemLine) {
        if (aline.Action == "Review" or aline.Action == null) {
          if (aline.EstimateAmount != null) {
            TotalOfInReview = TotalOfInReview + (aline.EstimateAmount as gw.api.financials.CurrencyAmount)
          }
        }
      }
      return TotalOfInReview;
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotDwellingIncidentCV.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotDwellingIncidentCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=NumberOfRooms_Cell) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 85, column 47
    function valueRoot_21 () : java.lang.Object {
      return roomDamage
    }
    
    // 'value' attribute on TextCell (id=NumberOfRooms_Cell) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 85, column 47
    function value_20 () : dynamic.Dynamic {
      return roomDamage.NumberOfRooms
    }
    
    // 'value' attribute on TextCell (id=RoomType_Cell) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 91, column 58
    function value_23 () : dynamic.Dynamic {
      return roomDamage.RoomType
    }
    
    property get roomDamage () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotDwellingIncidentCV.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotDwellingIncidentCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'valueLabel' attribute on CheckBoxInput (id=Damage_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 67, column 48
    function valueLabel_15 () : java.lang.Object {
      return damage.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=Damage_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 67, column 48
    function valueRoot_14 () : java.lang.Object {
      return damage
    }
    
    // 'visible' attribute on CheckBoxInput (id=Damage_Input) at ClaimSnapshotDwellingIncidentCV.600.pcf: line 67, column 48
    function visible_12 () : java.lang.Boolean {
      return damage.Exists
    }
    
    property get damage () : gw.api.claim.DamageManager {
      return getIteratedValue(1) as gw.api.claim.DamageManager
    }
    
    
  }
  
  
}
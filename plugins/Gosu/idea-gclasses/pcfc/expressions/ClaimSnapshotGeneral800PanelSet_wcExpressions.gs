package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneral800PanelSet.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral800PanelSet_wcExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneral800PanelSet.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral800PanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 60, column 29
    function def_onEnter_17 (def :  pcf.AddressSnapshot800InputSet) : void {
      def.onEnter(Snapshot.LossLocation, Snapshot)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 60, column 29
    function def_refreshVariables_18 (def :  pcf.AddressSnapshot800InputSet) : void {
      def.refreshVariables(Snapshot.LossLocation, Snapshot)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 243, column 40
    function encryptionExpression_111 (VALUE :  dynamic.Dynamic) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(VALUE as String)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 377, column 48
    function sortValue_178 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 381, column 80
    function sortValue_179 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 385, column 78
    function sortValue_180 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 389, column 79
    function sortValue_181 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 394, column 48
    function sortValue_182 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 399, column 48
    function sortValue_183 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.JobTitle
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 421, column 83
    function sortValue_200 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 426, column 48
    function sortValue_201 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 431, column 48
    function sortValue_202 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Comments
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 496, column 48
    function sortValue_233 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 501, column 48
    function sortValue_234 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 506, column 48
    function sortValue_235 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 155, column 48
    function sortValue_64 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 160, column 48
    function sortValue_65 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 23, column 40
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 233, column 40
    function valueRoot_105 () : java.lang.Object {
      return Snapshot.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on DateInput (id=HireDate_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 262, column 40
    function valueRoot_119 () : java.lang.Object {
      return Snapshot.EmploymentData
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 277, column 40
    function valueRoot_128 () : java.lang.Object {
      return Snapshot.Supervisor
    }
    
    // 'value' attribute on TextInput (id=LocationDescription_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 65, column 40
    function valueRoot_20 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 443, column 40
    function valueRoot_213 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 453, column 40
    function valueRoot_219 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 113, column 40
    function valueRoot_47 () : java.lang.Object {
      return Snapshot.ClaimInjuryIncident
    }
    
    // 'value' attribute on TextInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 172, column 40
    function valueRoot_74 () : java.lang.Object {
      return Snapshot.FirstIntakeDoctor
    }
    
    // 'value' attribute on TextInput (id=MedCase_Hospital_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 198, column 40
    function valueRoot_89 () : java.lang.Object {
      return Snapshot.Hospital
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 37, column 40
    function valueRoot_9 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 219, column 40
    function valueRoot_98 () : java.lang.Object {
      return Snapshot.Claimant
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 23, column 40
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 224, column 40
    function value_100 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Snapshot, null)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 228, column 69
    function value_102 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Snapshot.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 233, column 40
    function value_104 () : dynamic.Dynamic {
      return Snapshot.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DateOfBirth_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 237, column 76
    function value_107 () : java.lang.String {
      return util.Snapshot.renderDate(Snapshot.Claimant.DateOfBirth)
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 243, column 40
    function value_109 () : dynamic.Dynamic {
      return Snapshot.Claimant.TaxID
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 47, column 40
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 251, column 40
    function value_113 () : dynamic.Dynamic {
      return Snapshot.Claimant.Occupation
    }
    
    // 'value' attribute on TextInput (id=EmpClass_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 255, column 81
    function value_116 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.EmploymentData.ClassCode)
    }
    
    // 'value' attribute on DateInput (id=HireDate_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 262, column 40
    function value_118 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.HireDate
    }
    
    // 'value' attribute on TextInput (id=HireState_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 267, column 40
    function value_121 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.HireState
    }
    
    // 'value' attribute on TextInput (id=EmploymentStatus_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 272, column 40
    function value_124 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.EmploymentStatus
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 277, column 40
    function value_127 () : dynamic.Dynamic {
      return Snapshot.Supervisor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=NumDaysWorked_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 282, column 40
    function value_130 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=NumHoursWorked_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 287, column 40
    function value_133 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumHoursWorked
    }
    
    // 'value' attribute on TextInput (id=WageAmount_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 292, column 40
    function value_136 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WageAmount
    }
    
    // 'value' attribute on TextInput (id=PayPeriod_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 297, column 40
    function value_139 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PayPeriod
    }
    
    // 'value' attribute on DateInput (id=DateOfInjury_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 57, column 40
    function value_14 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on DateInput (id=InjuryStartDate_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 303, column 40
    function value_142 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.InjuryStartTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=PaidFull_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 314, column 40
    function value_148 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PaidFull
    }
    
    // 'value' attribute on BooleanRadioInput (id=WagePaymentCont_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 319, column 40
    function value_151 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WagePaymentCont
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifiedDutyAvail_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 324, column 40
    function value_154 () : dynamic.Dynamic {
      return Snapshot.ModifiedDutyAvail
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjuredRegularJob_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 329, column 40
    function value_157 () : dynamic.Dynamic {
      return Snapshot.InjuredRegularJob
    }
    
    // 'value' attribute on TextInput (id=EquipmentUsed_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 334, column 40
    function value_160 () : dynamic.Dynamic {
      return Snapshot.EquipmentUsed
    }
    
    // 'value' attribute on TextInput (id=ActivityPerformed_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 339, column 40
    function value_163 () : dynamic.Dynamic {
      return Snapshot.ActivityPerformed
    }
    
    // 'value' attribute on TextInput (id=DrugsInvolved_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 344, column 40
    function value_166 () : dynamic.Dynamic {
      return Snapshot.DrugsInvolved
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipProv_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 349, column 40
    function value_169 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipProv
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipUsed_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 354, column 40
    function value_172 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipUsed
    }
    
    // 'value' attribute on TextInput (id=ConcurrentEmployment_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 359, column 40
    function value_175 () : dynamic.Dynamic {
      return Snapshot.ConcurrentEmp
    }
    
    // 'value' attribute on TextInput (id=LocationDescription_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 65, column 40
    function value_19 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 371, column 43
    function value_199 () : dynamic.Dynamic {
      return Snapshot.ConcurrentEmpl
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 416, column 43
    function value_211 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WorkStatusChanges
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 443, column 40
    function value_212 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ReportedByType_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 448, column 40
    function value_215 () : dynamic.Dynamic {
      return Snapshot.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 453, column 40
    function value_218 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=InsuredPremises_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 70, column 40
    function value_22 () : dynamic.Dynamic {
      return Snapshot.InsuredPremises
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 458, column 40
    function value_221 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 465, column 40
    function value_224 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 470, column 40
    function value_227 () : dynamic.Dynamic {
      return Snapshot.FirstNoticeSuit
    }
    
    // 'value' attribute on DateInput (id=DateRptdToEmployer_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 477, column 40
    function value_230 () : dynamic.Dynamic {
      return Snapshot.DateRptdToEmployer
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 490, column 43
    function value_245 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 518, column 40
    function value_246 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 523, column 40
    function value_249 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentInjury_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 75, column 40
    function value_25 () : dynamic.Dynamic {
      return Snapshot.EmploymentInjury
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 80, column 40
    function value_28 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 28, column 40
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 88, column 40
    function value_31 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=MedicalReport_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 93, column 40
    function value_34 () : dynamic.Dynamic {
      return Snapshot.MedicalReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=TimeLossReport_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 98, column 40
    function value_37 () : dynamic.Dynamic {
      return Snapshot.TimeLossReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=DeathReport_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 103, column 40
    function value_40 () : dynamic.Dynamic {
      return Snapshot.DeathReport
    }
    
    // 'value' attribute on TextInput (id=DeathDate_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 108, column 40
    function value_43 () : dynamic.Dynamic {
      return Snapshot.DeathDate
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 113, column 40
    function value_46 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.Severity
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 118, column 40
    function value_49 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=AccidentType_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 123, column 40
    function value_52 () : dynamic.Dynamic {
      return Snapshot.AccidentType
    }
    
    // 'value' attribute on TextInput (id=PrimaryInjury_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 128, column 40
    function value_55 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.GeneralInjuryType
    }
    
    // 'value' attribute on TextInput (id=DetailedInjury_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 133, column 40
    function value_58 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.DetailedInjuryType
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 32, column 69
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LocationCode)
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 138, column 40
    function value_61 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 149, column 43
    function value_72 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.BodyParts
    }
    
    // 'value' attribute on TextInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 172, column 40
    function value_73 () : dynamic.Dynamic {
      return Snapshot.FirstIntakeDoctor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalDiagnosis_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 177, column 40
    function value_76 () : dynamic.Dynamic {
      return Snapshot.MedicalDiagnosis
    }
    
    // 'value' attribute on DateInput (id=MedCase_ExaminationDate_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 183, column 40
    function value_79 () : dynamic.Dynamic {
      return Snapshot.ExaminationDate
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 37, column 40
    function value_8 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalTreatment_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 188, column 40
    function value_82 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.MedicalTreatmentType
    }
    
    // 'value' attribute on TextAreaInput (id=MedCase_TreatmentRend_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 193, column 40
    function value_85 () : dynamic.Dynamic {
      return Snapshot.TreatmentRend
    }
    
    // 'value' attribute on TextInput (id=MedCase_Hospital_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 198, column 40
    function value_88 () : dynamic.Dynamic {
      return Snapshot.Hospital.DisplayName
    }
    
    // 'value' attribute on DateInput (id=MedCase_HospitalDate_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 204, column 40
    function value_91 () : dynamic.Dynamic {
      return Snapshot.HospitalDate
    }
    
    // 'value' attribute on TextInput (id=MedCase_HospitalDays_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 209, column 40
    function value_94 () : dynamic.Dynamic {
      return Snapshot.HospitalDays
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 219, column 40
    function value_97 () : dynamic.Dynamic {
      return Snapshot.Claimant.DisplayName
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Snapshot () : dynamic.Dynamic {
      return getRequireValue("Snapshot", 0) as dynamic.Dynamic
    }
    
    property set Snapshot ($arg :  dynamic.Dynamic) {
      setRequireValue("Snapshot", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneral800PanelSet.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 377, column 48
    function valueRoot_185 () : java.lang.Object {
      return ConcurrentEmpl
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 377, column 48
    function value_184 () : dynamic.Dynamic {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 381, column 80
    function value_187 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 385, column 78
    function value_189 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 389, column 79
    function value_191 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 394, column 48
    function value_193 () : dynamic.Dynamic {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 399, column 48
    function value_196 () : dynamic.Dynamic {
      return ConcurrentEmpl.JobTitle
    }
    
    property get ConcurrentEmpl () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneral800PanelSet.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 426, column 48
    function valueRoot_206 () : java.lang.Object {
      return WorkStatusChange
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 421, column 83
    function value_203 () : java.lang.String {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 426, column 48
    function value_205 () : dynamic.Dynamic {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 431, column 48
    function value_208 () : dynamic.Dynamic {
      return WorkStatusChange.Comments
    }
    
    property get WorkStatusChange () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneral800PanelSet.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 496, column 48
    function valueRoot_237 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 496, column 48
    function value_236 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 501, column 48
    function value_239 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 506, column 48
    function value_242 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneral800PanelSet.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 155, column 48
    function valueRoot_67 () : java.lang.Object {
      return BodyPart
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 155, column 48
    function value_66 () : dynamic.Dynamic {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral800PanelSet.wc.pcf: line 160, column 48
    function value_69 () : dynamic.Dynamic {
      return BodyPart.DetailedBodyPart
    }
    
    property get BodyPart () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}